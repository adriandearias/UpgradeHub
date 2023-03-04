const { register, login } = require("./users.controller");
const usersRoutes = require("express").Router();

usersRoutes.post("/", register)
usersRoutes.post("/login", login)

module.exports = usersRoutes;