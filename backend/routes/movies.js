const express = require("express");
const movieRouter = express.Router();
const { asyncHandler, handleValidationErrors } = require("../utils");
const db = require("../db/models");
const { Movie } = db;

movieRouter.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const movie = await Movie.findByPk(id);
    const { title, description, genre, subGenre, releaseDate } = movie;
    res.send({
        title: title,
        description: description,
        genre: genre,
        subGenre: subGenre,
        releaseDate: releaseDate
    });
}))


module.exports = movieRouter;