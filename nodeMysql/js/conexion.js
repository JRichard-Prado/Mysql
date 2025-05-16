let mysqlDB = require("mysql");

function conexionDB() {
    console.log("Conectando a la base de datos");
    
}
let conexion = mysqlDB.createConnection({
    host: "root@localhost",
    database: "nodejs",
    user: "root",
    password: "Root.123456",
    port: 3306,
});
conexion.connect(function (error) {
    if (error) {
        console.log("Error de conexion"+error);
        return;
    }
    console.log("Conectado a la base de datos");
}
);
conexion.end();
console.log('hola node');
