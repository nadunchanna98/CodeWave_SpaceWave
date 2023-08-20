const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Reservation = require('./Reservation');

const Payment_Status = sequelize.define('Payment_Status', {
  Payment_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Payment_Status_YN: {
    type: DataTypes.CHAR(1),
  },
  Payment_Due_Date: {
    type: DataTypes.DATE,
  },
  Payment_Amount: {
    type: DataTypes.INTEGER,
  },
  Reservation_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Payment_Status.belongsTo(Reservation, { foreignKey: 'Reservation_ID' });

module.exports = Payment_Status;
