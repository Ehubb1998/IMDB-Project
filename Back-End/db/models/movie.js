'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    genre: DataTypes.STRING,
    subGenre: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    posterUrl: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Review, { foreignKey: "movie_title_id" });
    Movie.hasMany(models.WatchLater, { foreignKey: "movie_title_id" });
  };
  return Movie;
};