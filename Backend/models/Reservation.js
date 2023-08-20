const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Passenger = require('./Passenger');
const Seat_Details = require('./Seat_Details');

const Reservation = sequelize.define('Reservation', {
  Reservation_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Passenger_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Seat_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Date_Of_Reservation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Reservation.belongsTo(Passenger, { foreignKey: 'Passenger_ID' });
Reservation.belongsTo(Seat_Details, { foreignKey: 'Seat_ID' });

module.exports = Reservation;
