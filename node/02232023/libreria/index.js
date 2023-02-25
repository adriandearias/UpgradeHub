//? funcionamiento del server
//! rutas que utiliza nuestro servidor
//* Configuraciones 

//* Traemos la librería dotenv para poder leer variables de .env (variables de entorno) 
require('dotenv').config();

//*Creamos variable port y le damos el valor del puerto asignado en .env.
const PORT = process.env.PORT;

//! importamos las rutas de los libros
const librosRoutes = require("./src/api/libros/libros.routes");

//* Traemos la bbdd
const db = require('./src/utils/db.js')
//* Estoy ejecutando la funcion connectDB de mi archivo db.js
db.connectDB();

//? traemos la libreria express para tener las opciones del servidor con express
const express = require("express");

//? ejecuto la variable express que tiene todo lo de la libreria, 
//? lo guardo en mi variable server, de esta manera tendré muchas funciones
//? que podré ejecutar para que realice mi servidor.
const server = express();

const cors = require('cors');
server.use(cors({
    origin: ["*"] //podemos restringir por ip, si no lo ponemos permite todo al igual que *
}));

//! una ruta que usa els ervidor para indicarme que /libros 
server.use('/libros', librosRoutes);

server.use('/', (req, res)=>{
    res.send('Working, go to <a href= http://localhost:8000/libros>http://localhost:8000/libros</a>')
})

//? Una función que ejcuta mi servidor, en este caso para levantar o 
//? escuchar (el servidor), es decir, que sea accesible
server.listen(PORT, () =>{
    console.log("Server is running! Ok -> http://localhost:"+PORT);
});