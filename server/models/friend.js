module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('friend', {
    user_1: DataTypes.INTEGER,
    user_2: DataTypes.INTEGER,
  }, {
    timestamps: false
  });
  return Friend;
};