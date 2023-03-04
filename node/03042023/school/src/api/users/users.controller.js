const User = require("./users.model");
const bcrypt = require('bcrypt');
const { generateSign } = require("../../utils/jwt");


const register = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        await new newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

module.exports = { register }

const login = async (req, res, next) => {
    try {
        //? tiene que comparar lo que le envio con loq ue tenemos registrado en la bbdd
        //* req.body.email 
        //* req.body.password

        const userToLog = await User.findOne({email: req.body.email});

        if(!userToLog){
            return res.status(500).json("No se encuentra ese usuario");
        }

        if(bcrypt.compareSync(req.body.password, userToLog.password)){
            const token = generateSign(userToLog.id, userToLog.email);
            return res.status(200).json({token, userToLog});
        }else{
            return res.status(500).json("Error en el login");
        }

    } catch (error) {
        next(error);
    }
}