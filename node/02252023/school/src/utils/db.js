const mongoose = require('mongoose');

const dbLink = process.env.DB_URL;

const connectDB = async() =>{
    try {
        mongoose.set('strictQuery', true) //esta linea es para que no aparezca warning
        const db = await mongoose.connect(dbLink);
        const { host } = db.connection;
        console.log('Connected to host ->' +host);
    } catch (error) {
        console.log('<ERROR> Can t connect to BBDD!!! ', error);
    }
}

module.exports = { connectDB }