const { verifyJwt } = require("../src/utils/jwt");

const isAuth = async (req, res, next) =>{
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.json("Not authorized");
        }
        const parsedToken = token.replace("Bearer ", "");
        const validToken = verifyJwt(parsedToken);
        
        next();
    } catch (error) {
        return res.json(error);
    }
}