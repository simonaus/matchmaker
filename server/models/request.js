module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('User', {
    user_1: DataTypes.INTEGER,
    user_2: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
  });
  return Request;
};