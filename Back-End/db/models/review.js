'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    movie_title_id: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Movie, { foreignKey: "movie_title_id" });
    Review.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Review;
};