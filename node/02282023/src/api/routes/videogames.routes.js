const router = require("express").Router();

const {getAllVideoGames} = require("../controllers/videogames.controllers");

router.get("/", getAllVideoGames);
router.get("/:id");

module.exports = { router };
