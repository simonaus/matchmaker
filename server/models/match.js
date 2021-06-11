module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    user_1: DataTypes.INTEGER,
    user_2: DataTypes.INTEGER,
    matched_by: DataTypes.INTEGER,
    created_on: DataTypes.DATE
  });
  return Match;
};