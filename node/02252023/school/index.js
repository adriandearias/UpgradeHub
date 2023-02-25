require('dotenv').config();
const PORT = process.env.PORT;

const studentsRoutes = require("./src/api/students/students.routes");

const db = require('./src/utils/db');
db.connectDB();

const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());

server.use('/students', studentsRoutes);
server.use('/', (req, res)=>{
    res.send('Working, go to <a href= http://localhost:8000/students>http://localhost:8000/students</a> OR /students/getByNif/ OR /students/getById/ OR /students/getByName/')
})

server.listen(PORT, () =>{
    console.log("Server is running! Ok -> http://localhost:"+PORT);
});