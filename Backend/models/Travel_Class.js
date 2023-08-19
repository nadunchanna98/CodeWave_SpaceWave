const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Travel_Class = sequelize.define('Travel_Class', {
  Travel_Class_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Travel_Class_Name: {
    type: DataTypes.STRING(100),
  },
  Travel_Class_Capacity: {
    type: DataTypes.BIGINT,
  },
});

module.exports = Travel_Class;
