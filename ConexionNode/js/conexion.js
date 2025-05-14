// let mysql = require('mysql');

// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Root.123456",
//   database: "nodejs"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// console.log("Connected!");


const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root.123456',
  database: 'nodejs'
});
// connect to the MySQL database
connection.connect((error)=>{
if(error){
console.error('Error connecting to MySQL database:'+ error );
}else{
console.log('conectado a  MySQL database!');
}
});
// close the MySQL connection
connection.end();