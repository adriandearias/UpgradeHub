const Libro = require("./libros.model");

const getAllLibros = async (req, res) =>{
    try {
        //* intenta recoger de la bbdd todos los libros
        const libros = await Libro.find();
        return res.json(libros)
    } catch (error) {
        return res.json("ERROR -> Error getting books", error);
    }
}

const getLibrosById = async (req, res) =>{
    try {
        const {id} = req.params;
        const libro = await Libro.findById(id);
        if(!libro){
            return res.json('No se ha podido encontrar el libro, el id no existe');
        }
        return res.json(libro);
    } catch (error) {
        return res.json("ERROR -> Error getting books", error);
    }
}

const getByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const libro = await Libro.findOne({title: title});
        if(!libro){
            return res.json('No se ha podido encontrar el libro, el titulo no existe');
        }
        return res.json(libro)
    } catch (error) {
        return res.json("ERROR -> Error getting books", error);
    }
}

module.exports = {
    getAllLibros,
    getLibrosById,
    getByTitle
}

