//! LA LIBRERÍA QUE VAMOS A UTILIZAR PARA CUALQUIER COSA QUE TENGA QUE VER AUNQUE SEA MÍNIMAMENTE CON LA BBDD SERÁ MONGOOSE
//! EN ESTE ARCHIVO CONECTARÉ CON LA BASE DE DATOS MEDIANTE UNA FUNCIÓN Y PARA ELLO NECESITO MONGOOSE

//? Me traigo la librería mongoose
const mongoose = require("mongoose");

//? Guardamos en una variabl el link a la bbdd para poder conectar
const dbLink = process.env.DB_URL;

const connectDB = async() =>{
    try{
        mongoose.set('strictQuery', true) //esta linea es para que no aparezca warning
        //! con la funcion connect de mongoose pasandole por pareametro el link de la bd, conectaremos
        const db = await mongoose.connect(dbLink);
        //? extraemos un dato que queremos mostrar en el console.log()
        const { host} = db.connection;
        console.log('Connected to host ->' +host);
    }catch(error){
        //? mensaje error
        console.log('<ERROR> Can t connect to BBDD!!! ');
    }
}

//! exportamos la funcion para que pueda ser utilizada desde cualquier archivo,
//!  en este caso la ejecutamos en el index.js
module.exports = { connectDB }