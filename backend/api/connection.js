var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
}); 


connection.connect((error)=>{
    if(error){
        console.log('Error : '+error.stack);
    } else {
        console.log('connected');
    }
});
module.exports = connection;
