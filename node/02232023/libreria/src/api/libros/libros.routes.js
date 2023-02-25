const { getAllLibros, getLibrosById, getByTitle } = require("./libros.controller");

//! las rutas no pueden funcionar sin controladores, por lo tanto hacemos primero controller antes que rutas
const librosRoutes = require("express").Router();

librosRoutes.get("/", getAllLibros);
librosRoutes.get("/:id", getLibrosById);
librosRoutes.get("/getByTitle/:title", getByTitle);

module.exports = librosRoutes;
