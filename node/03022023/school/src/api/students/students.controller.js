const Student = require("./students.model");

const getAll = async (req, res) =>{
    try {
        //* intenta recoger de la bbdd todos los estudiantes
        const students = await Student.find();
        return res.json(students)
    } catch (error) {
        return res.json("ERROR -> Error getting students", error);
    }
}

const getByID = async (req, res) =>{
    try {
        const {id} = req.params;
        const students = await Student.findById(id);
        if(!students){
            return res.json('No se ha podido encontrar el estudiante, el id no existe');
        }
        return res.json(students);
    } catch (error) {
        return res.json("ERROR -> Error getting students", error);
    }
}

const getByName = async (req, res) =>{
    try {
        const { name } = req.params;
        const students = await Student.find({name: name});
        if(!students){
            return res.json('No se ha podido encontrar el estudiante, el Nombre no existe');
        }
        return res.json(students);
    } catch (error) {
        return res.json("ERROR -> Error getting students", error);
    }
}

const getByNif = async (req, res) =>{
    try {
        const { nif } = req.params;
        const students = await Student.findOne({nif: nif});
        if(!students){
            return res.json('No se ha podido encontrar el estudiante, el DNI no existe');
        }
        return res.json(students);
    } catch (error) {
        return res.json("ERROR -> Error getting students byNif", error);
    }
}
//!POST
const newStudent = async (req, res) => {
    try {
        const newStudent = await new Student(req.body);
        await newStudent.save();
        return res.json(newStudent);
    
    } catch (error) {
        // return res.status(500).json(error);
        return next(error); 
    }
}
//! DELETE
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteStudent = await Student.findByIdAndDelete(id);
        return res.status(200).json(deleteStudent)
    } catch (error) {
        // return res.status(500).json(error);
        return next(error); 
    }
}

//! PUT
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updateStudent = await Student.findByIdAndUpdate(id, req.body, {new: true}); //así devuelve el nuevo valor
        return res.status(200).json(updateStudent)
    } catch (error) {
        return next(error); 
    }
}

module.exports = {
    getAll,
    getByNif,
    getByName,
    getByID,
    newStudent,
    deleteStudent,
    updateStudent
}