const express = require("express");
//traemos la libreria dotenv y la config
require("dotenv").config();  //PORT es la variable de entorno de .env
const PORT = process.env.PORT;
//ejecutar libreria express
const server = express();
//! nos traemos el router de express que cuando lo ejecutamos y lo guardamos en una variable nos
//! da la capacidad gestionar diferentes rutas
const router = express.Router();

// declaramos una nueva ruta con un parametro que se llama id
router.get("/movies/:id", (req, res) =>{
    //!ponga lo que ponga el usuario en url despues de /movies/XXXXXXXX
    //! en el req sera -> req.params.id
    const { id } = req.params; //destructuring ES6
    const movies = [
        {
            id: "1234",
            title: "Titanic",
            cover: "https://url",
            duration: 245
        },
        {
            id: "4321",
            title: "Avatar",
            cover: "https://url",
            duration: 300
        }
    ]
    //res.send("Hola desde barra");
    const movieById = movies.find((movie) => movie.id === id);
    res.json(movieById);
});
    //! UNICAMENTE PUEDE HABER UNA RUTA IGUAL /PATH/:X
    //! se añade getBytittle que no hace nada, solo indica una nueva ruta 
router.get("/movies/getByTitle/:title", (req, res) =>{
    const { title } = req.params; //destructuring ES6
    const movies = [
        {
            id: "1234",
            title: "Titanic",
            cover: "https://url",
            duration: 245
        },
        {
            id: "4321",
            title: "Avatar",
            cover: "https://url",
            duration: 300
        }
    ]
    
    const movieByTitle = movies.find((movie) => movie.title === title);
    //res.send("Hola desde barra");
    res.json(movieByTitle);
});

router.get("/movies", (req, res) =>{
    const movies = [
        {
            id: "1234",
            title: "Titanic",
            cover: "https://url",
            duration: 245
        },
        {
            id: "4321",
            title: "Avatar",
            cover: "https://url",
            duration: 300
        }
    ]
    //res.send("Hola desde barra");
    res.json(movies);
});

router.get("/", (req, res) =>{
    res.send("Accede a /movies para ver peliculas");
});

server.use("/", router);
server.use("/movies", router);

//el servidor tiene varias funciones, se puede usar(server.use()), se puede poner a escuchar (server.listen());
server.listen(PORT, () =>{
    console.log("Server is running -> http://localhost"+PORT);
})