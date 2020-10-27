'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchLater = sequelize.define('WatchLater', {
    user_id: DataTypes.INTEGER,
    movie_title_id: DataTypes.INTEGER
  }, {});
  WatchLater.associate = function(models) {
    // associations can be defined here
    WaterLater.belongsTo(models.Movie, { foreignKey: "movie_title_id" });
    WaterLater.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return WatchLater;
};