'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, { foreignKey: "user_id" });
    User.hasMany(models.WatchLater, { foreignKey: "user_id" });
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
    // console.log(validation);
  };

  return User;
};