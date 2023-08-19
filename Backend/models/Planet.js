const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Planet = sequelize.define('Planet', {
  Planet_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  PlanetName: DataTypes.STRING,
  Temperature: DataTypes.INTEGER,
  PlanetDescription: DataTypes.STRING,
});

module.exports = Planet;
