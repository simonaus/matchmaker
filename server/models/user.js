module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_picture: DataTypes.STRING(300),
    is_match: DataTypes.BOOLEAN,
    description: DataTypes.STRING(2000),
    facebook_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    interested_in: DataTypes.STRING,
  });
  return User;
};