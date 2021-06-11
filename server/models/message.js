module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    match_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    content: DataTypes.STRING(2000)
  });
  return Message;
};