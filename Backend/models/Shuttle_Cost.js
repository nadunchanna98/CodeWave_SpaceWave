const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Seat_Details = require('./Seat_Details');

const Shuttle_Cost = sequelize.define('Shuttle_Cost', {
  Seat_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Valid_From_Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Valid_To_Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Cost: {
    type: DataTypes.BIGINT,
  },
});

Shuttle_Cost.belongsTo(Seat_Details, { foreignKey: 'Seat_ID' });

module.exports = Shuttle_Cost;
