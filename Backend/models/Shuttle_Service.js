const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Shuttle_Service = sequelize.define('Shuttle_Service', {
  Service_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Service_Name: {
    type: DataTypes.STRING(100),
    validate: {
      isIn: [['Food', 'French Wine', 'Wifi', 'Entertainment', 'Lounge']],
    },
  },
  Service_Description: {
    type: DataTypes.STRING(1000),
  },
});

module.exports = Shuttle_Service;
