const jwt = require('jsonwebtoken');


//! PARA GENERAR TOKENS Y COMPROBARLOS NECESITAMOS UNA VARIABLE SECRETA DE LA QUE PARTIR PARA GENERAR EL TOKEN

const generateSign = (id, email) =>{
    return jwt.sign({id, email}, process.env.JWT_SECRET, {expiresIn: '30d'});
}

// recibe un token y nuestra func comprueba si el token corresponde al user
const verifyJwt = (token) =>{
    return jwt.verify(token, process.env,JWT_SECRET); 
}

module.exports = {generateSign, verifyJwt}