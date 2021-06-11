module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('User', {
    user_1: DataTypes.INTEGER,
    user_2: DataTypes.INTEGER,
  });
  return Friend;
};