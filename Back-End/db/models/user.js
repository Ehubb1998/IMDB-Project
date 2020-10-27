'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING(50),
    userName: DataTypes.STRING(50),
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, { foreignKey: "user_id" });
    User.hasMany(models.WatchLater, { foreignKey: "user_id" });
  };
  return User;
};