const mongoose = require('mongoose');

//definimos el schema de students

const teacherSchema = new mongoose.Schema({
    name:{type: String, required: true},
    secondName:{type: String, required: true},
    dateOfBirth: {type: String, required: true},
    nif: {type: String, unique: true, trim: true, required: true},
    subject: {
        type: String, 
        required: true, 
        enum: ["Software Developer", "Nurse", "Medical", "Financial"]}
    },
    {
        timestamps: true,
        collection: "teachers"
    }
);

const Teacher = mongoose.model("teachers" ,teacherSchema);
module.exports = Teacher;