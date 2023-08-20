const express = require('express');
const { Op } = require('sequelize');
const { Seat_Details } = require('../models/Seat_Details');
const { Shuttle_Details } = require('../models/Shuttle_Details');

const router = express.Router();

router.get('/seatdetails', async (req, res) => {
  try {
    const seat_details = await Seat_Details.findAll();
    res.status(200).json(seat_details);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching planets.' });
  }
});

router.get('/seatdetails/:id', async (req, res) => {
     


const shuttleId = req.params.id; 

//get the shuttle id from the url
//const shuttleId = req.params.id; // Replace with the actual shuttle ID
//get current date

const targetDate = new Date(); // Replace with the actual target date

// Query for available seats in the specified shuttle and date
Seat_Details.findAll({
  attributes: ['Seat_ID'],
  include: [
    {
      model: Shuttle_Details,
      where: {
        Shuttle_ID: shuttleId,
        Departure_Date_Time: {
          [Op.lte]: targetDate, // Seats available for shuttles departing on or after targetDate
        },
        Arrival_Date_time: {
          [Op.gte]: targetDate, // Seats available for shuttles arriving on or before targetDate
        },
      },
    },
  ],
})
.then((availableSeats) => {
  console.log('Available Seats:', availableSeats);
})
.catch((error) => {
  console.error('Error fetching available seats:', error);
});

}
);

module.exports = router;