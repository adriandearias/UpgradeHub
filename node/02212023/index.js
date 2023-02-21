const express = require("express");
const PORT = 8000;
//ejecutar libreria express
const server = express();
//el servidor tiene varias funciones, se puede usar(server.use()), se puede poner a escuchar (server.listen());
server.listen(PORT, () =>{
    console.log("Server is running -> http://localhost"+PORT);
})