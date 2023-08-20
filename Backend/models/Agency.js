const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Planet = require('./Planet');


const Agency = sequelize.define('Agency', {
  Agency_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Planet_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  AgencyName: {
    type: DataTypes.STRING(100),
  },
  AgencyLocation: {
    type: DataTypes.STRING(100),
  },
});

Agency.belongsTo(Planet, { foreignKey: 'Planet_ID' });

module.exports = Agency;
