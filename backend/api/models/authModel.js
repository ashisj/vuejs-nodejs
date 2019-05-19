const con = require('../connection');

const User = function(user){
    this.name = user.name,
    this.email = user.email,
    this.password = user.password
}

User.login = function(email,result){
    con.query(`
        SELECT str_name,str_email,str_password
        FROM tbl_user
        WHERE str_email = ?
        `,
        email,
        (err,res)=>{
            if(err){
                result(err,null)
            } else {
                result(null,res)
            }
        }
    )
}

User.signUp = function(newUser,result){
    con.query(`
        INSERT INTO
        tbl_user(str_name,str_email,str_password)
        VALUES(?,?,?)
        `,[newUser.name,newUser.email,newUser.password],
        (err,res)=>{
            if(err){
                result(err,null)
            }else{
                result(null,res)
            }
        }
    );
}

User.email = function email(email,result){
    con.query("SELECT 1 FROM tbl_user  WHERE str_email = ?",email,function(err,res){
      if(err){
        result(err,null);
      }else{
        result(null,res);
      }
    });
}
module.exports = User;
