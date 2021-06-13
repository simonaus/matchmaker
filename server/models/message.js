module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    match_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    content: DataTypes.STRING(2000)
  }, {
    timestamps: false
  });
  return Message;
};