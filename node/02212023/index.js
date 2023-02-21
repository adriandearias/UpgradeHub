const express = require("express");
//traemos la libreria dotenv y la config
require("dotenv").config();  //PORT es la variable de entorno de .env
const PORT = process.env.PORT;
//ejecutar libreria express
const server = express();

server.use("/movies", (req, res) =>{
    const movies = [
        {
            tittle: "Titanic",
            cover: "https://url",
            duration: 245
        },
        {
            tittle: "Avatar",
            cover: "https://url",
            duration: 300
        }
    ]
    //res.send("Hola desde barra");
    res.json(movies);
});

server.use("/", (req, res) =>{
    res.send("Accede a /movies para ver peliculas");
});

//el servidor tiene varias funciones, se puede usar(server.use()), se puede poner a escuchar (server.listen());
server.listen(PORT, () =>{
    console.log("Server is running -> http://localhost"+PORT);
})