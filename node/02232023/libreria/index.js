//? funcionamiento del server
//! rutas que utiliza nuestro servidor
//* Configuraciones 

//* Traemos la librería dotenv para poder leer variables de .env (variables de entorno) 
require('dotenv').config();

//*Creamos variable port y le damos el valor del puerto asignado en .env.
const PORT = process.env.PORT;

//* Traemos la bbdd
const db = require('./src/utils/db.js')
//* Estoy ejecutando


//? traemos la libreria express para tener las opciones del servidor con express
const express = require("express");

//? ejecuto la variable express que tiene todo lo de la libreria, 
//? lo guardo en mi variable server, de esta manera tendré muchas funciones
//? que podré ejecutar para que realice mi servidor.
const server = express();

server.use('/', (req, res)=>{
    res.send('Working')
})

//? Una función que ejcuta mi servidor, en este caso para levantar o 
//? escuchar (el servidor), es decir, que sea accesible
server.listen(8000, () =>{
    console.log("Server is running! Ok -> http://localhost:"+PORT);
});