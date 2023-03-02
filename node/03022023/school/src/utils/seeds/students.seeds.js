const mongoose = require("mongoose");
const Student = require("../../api/students/students.model");
require("dotenv").config();
const DB_URL = process.env.DB_URL

const students = [
    {
    name: "Harry",
    secondName: "Potter",
    dateOfBirth: "03/03/1900",
    nif: "44477785V",
    career: "Software Developer"
    },
    {
    name: "Leticia",
    secondName: "Sabater",
    dateOfBirth: "04/02/1400",
    nif: "34777850G",
    career: "Nurse"
    }
];
mongoose.set("strictQuery", true);

mongoose.connect(DB_URL).then(async () => {
    const students = await Student.find(); 
    if(students.length){
        await Student.collection.drop(); 
        console.log('BOOKS DELETED! -> OK');
    }
    }).catch((error) => console.log(`ERROR: -> Can't delete BBDD: ${error}`))
    .then(async () => {
        await Student.insertMany(students);
        console.log('BOOKS CREATED -> OK');
    })
    .catch((error) => console.log('ERROR -> Error uploading data to bbdd :', error))
    .finally(() => mongoose.disconnect());