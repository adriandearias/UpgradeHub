const { query } = require("express");
const Videogame = require("../models/videogames.models");

const getAllVideoGames = async(req, res) =>{
    try {
        const {name} = req.query;
        const allVideoGames = await Videogame.find();
        let filteredVideoGameList = [...allVideoGames]

        if(name){
            filteredVideoGameList = filteredVideoGameList.filter((videogames)=> videogames.title.toLowerCase().match(name.toLocaleLowerCase()));
        }

        if (!allVideoGames) {
            return res.json({
                status: 404,
                message: "Videogame not Found"
            })
        }
        return res.json({
            videogames: filteredVideoGameList
        })
    } catch (error) {
        return res.json({message: "error", error: error})
    }
}

module.exports = {getAllVideoGames};