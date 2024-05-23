const mysql = require('mysql');//usamos el modulo 

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'cruddeusuario'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de coneccion es :'+error);
        return
    }
    console.log('¡Conectado a la base de datos!');
});

module.exports = conexion;