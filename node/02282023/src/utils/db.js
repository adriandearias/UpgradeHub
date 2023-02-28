const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DB_URL = process.env.DB_URL

const connect = async () => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);
        const { name, host } = db.connection;
        console.log(`Connected to DB: ${name} in host ${host}`);
    } catch (error) {
        console.log("Error connecting to DB!! " ,error);
    }
}

module.exports = {
    connect
}