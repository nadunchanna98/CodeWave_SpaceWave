const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Agency = sequelize.define('Agency', {
  Agency_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Planet_ID: DataTypes.INTEGER,
  AgencyName: DataTypes.STRING,
  AgencyLocation: DataTypes.STRING,
});

module.exports = Agency;
