module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('match', {
    user_1: DataTypes.INTEGER,
    user_2: DataTypes.INTEGER,
    matched_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  return Match;
};