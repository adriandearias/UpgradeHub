require('dotenv').config();
const PORT = process.env.PORT;

const studentsRoutes = require("./src/api/students/students.routes");
const usersRoutes = require('./src/api/users/users.routes');
const db = require('./src/utils/db');
db.connectDB();

const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());

//! MIDDLEWARES
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(`/users`, usersRoutes)
server.use('/students', studentsRoutes);
server.use('/', (req, res)=>{
    res.send('Working, go to <a href= http://localhost:8000/students>http://localhost:8000/students</a> OR /students/getByNif/ OR /students/getById/ OR /students/getByName/')
})

server.listen(PORT, () =>{
    console.log("Server is running! Ok -> http://localhost:"+PORT);
});

//! Errors control <- 4 params -> err, req, res, next
server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Unknown Error");
});

server.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error); 
});