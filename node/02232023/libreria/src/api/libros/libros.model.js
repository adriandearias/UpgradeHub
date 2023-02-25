//? Traemos mongoose para referenciar a una colección de la bbdd
const mongoose = require('mongoose');
// const Schema = mongoose.schema
//! Comenzamos la creación del Schema -> le inficamos los parametros que debe seguir para un libro
const libroSchema = new mongoose.Schema({
    title:{type: String, required: true},
    cover:{type: String, required: true, maxlength: 120},
    price: {type: Number, required: true},
    ISBN: {type: String, unique: true, trim: true, required: true},
    category: {
        type: String, 
        required: true, 
        enum: ["Drama", "Action", "Comedy", "Romantic", "Horror"]}
    },
    {
        timestamps: true,
        collection: "libros"
    }
);

const Libro = mongoose.model("libros", libroSchema);
module.exports = Libro