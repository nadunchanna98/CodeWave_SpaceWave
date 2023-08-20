const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Passenger = require('./Passenger');

const User = sequelize.define('User', {
  User_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Email: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
  },
  user_Role: {
    type: DataTypes.STRING(50),
  },
});



module.exports = User;
