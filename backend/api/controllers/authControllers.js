var bcrypt = require('bcrypt');
const saltRounds = 10;
var con = require('../connection');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
const { validationResult } = require('express-validator/check');
var User = require("../models/authModel");

exports.login = (req,res,next) => {
  console.log(req.body);
    User.login(req.body.email,function(error,user){
        if(error){
          next(new Error(error));
        } else {
          console.log(user)
            if(!user.length){
                res.send({
                  status:false,
                  message:"Authentication Failed"
                });
            } else {
                bcrypt.compare(req.body.password, user[0].str_password, function(err, result) {
                  if(err){
                    next(new Error(err));
                  }
                  if(result){
                    var token = jwt.sign(
                      {
                        name:user[0].str_name,
                        email:user[0].str_email
                      },
                      process.env.JWT_PRIVATE_KEY,
                      {
                        expiresIn: 3000
                      }
                    );
                    //res.cookie('token',token)
                    res.status(202).json({
                      status:true,
                      message:"login successfull",
                      token:token
                    });
                  } else {
                    res.send({
                      status:false,
                      message:"Authentication Failed"
                    });
                  }
                });
            }
        }
    });
};

exports.signUp = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let errorResult={
            nameError:'',
            emailError:'',
            passwordError:''
        }
        errors.array().forEach((value)=>{
            errorResult[value.param] = value.msg
        })
        res.send({status:false,message:errorResult});
    }
    let user ={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    };

    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        if(err){
          next(new Error(err));
        } else {
          user.password = hash;
          var newUser = new User(user);
          User.signUp(newUser,function(error,results){
            if(error) {
              next(new Error(error));
            } else {
              res.send({
                status:true,
                message:"registered sucessfully",
                user:results
              });
            }
          });
        }
    });
};

exports.checkEmail = (req,res,next) => {
  User.email(req.params.email,function(error,result){
    if(error){
      next(new Error(error));
    }
    if(result.length){
      res.send({
        status:false,
        message:"Email is already exists"
      })
    }else{
      res.send({
        status:true,
        message:"Email is ok"
      })
    }
  });
}
