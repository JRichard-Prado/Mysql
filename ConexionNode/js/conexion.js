const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root.123456',
  database: 'nodejs'
});
// connect to the MySQL database
function conexionDB() {
  console.log('Conectando a la base de datos...');
  connection.connect((error)=>{
    if(error){
      console.error('Error connecting to MySQL database:'+ error );
    }else{
      console.log('conectado a  MySQL database!');
    }
  });
  connection.end();
}
// close the MySQL connection
conexionDB();