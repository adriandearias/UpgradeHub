const { getAll, getByNif, getByName, getByID, newStudent, deleteStudent, updateStudent } = require("./students.controller");
const studentsRoutes = require("express").Router();

studentsRoutes.get('/', getAll);
studentsRoutes.get('/:id', getByID);
studentsRoutes.get("/getByName/:name", getByName);
studentsRoutes.get('/getByNif/:nif', getByNif);
studentsRoutes.post("/", newStudent);
studentsRoutes.delete("/:id", deleteStudent);
studentsRoutes.put("/:id", updateStudent);

module.exports = studentsRoutes;