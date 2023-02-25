const { getAll, getByNif, getByName, getByID } = require("./students.controller");
const studentsRoutes = require("express").Router();

studentsRoutes.get('/', getAll);
studentsRoutes.get('/:id', getByID);
studentsRoutes.get("/getByName/:name", getByName);
studentsRoutes.get('/getByNif/:nif', getByNif);

module.exports = studentsRoutes;