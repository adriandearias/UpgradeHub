const mongoose = require('mongoose');

//definimos el schema de students

const studentSchema = new mongoose.Schema({
    name:{type: String, required: true},
    secondName:{type: String, required: true},
    dateOfBirth: {type: String, required: true},
    nif: {type: String, unique: true, trim: true, required: true},
    career: {
        type: String, 
        required: true, 
        enum: ["Software Developer", "Nurse", "Medical", "Financial"]}
    },
    {
        timestamps: true,
        collection: "students"
    }
);

const Student = mongoose.model("students" ,studentSchema);
module.exports = Student;