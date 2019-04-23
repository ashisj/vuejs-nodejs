const authModel = require('../models/authModel.js');
const {check} = require('express-validator/check');

exports.validate = (method) => {
    switch (method){
      case 'createUser':{
        return [
            check('name').exists().trim()
                .not().isEmpty().withMessage('Name field should not be empty')
                .isLength({ max: 50 }).withMessage('Name must have maximum 50 character')
                .matches(/^[A-Za-z]+[A-Za-z ]*$/).withMessage('Name should contain only alphabets'),
            check('email').exists().trim()
              .not().isEmpty().withMessage('Email field should not be empty')
              .isLength({ max: 50 }).withMessage('Email must have maximum 50 character')
              .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
                      .withMessage('please enter a valid email address eg:- a@gmail.com')
              .custom((value,{req}) =>{
                return new Promise((resolve,reject) => {
                    authModel.email(req.body.email,(err,user)=>{
                    if(err){
                      reject(new Error(err))
                    } else if(user.length){
                      reject(new Error('Email is already exist'))
                    } else{
                      resolve(true)
                    }
                  })
                })
              }),
            check('password').exists()
              .not().isEmpty().withMessage('Password field should not be empty')
              .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
                      .withMessage('Password must contain at least 8 characters, including UPPER,lowercase and number'),
            check('rePassword','Repeat Password field must have the same value as the password field')
              .exists()
              .custom((value,{req}) => value  === req.body.password)
        ]
      }
    }
  }
  