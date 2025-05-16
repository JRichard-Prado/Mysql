// importar el modulo mysql2
const mysql = require('mysql2');
// crear una conexion MySQL 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root.123456',
  database: 'nodejs'
});
// conectar a la base de datos
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
// cerrar la conexion
conexionDB();