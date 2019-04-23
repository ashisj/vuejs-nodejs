var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'db_userauth'
});

connection.connect((error)=>{
    if(error){
        console.log('Error : '+error.stack);
    } else {
        console.log('connected');
    }
});
module.exports = connection;