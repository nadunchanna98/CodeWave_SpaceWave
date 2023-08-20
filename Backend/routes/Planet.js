const express = require('express');
const Planet = require('../models/Planet');

const router = express.Router();

router.get('/planets', async (req, res) => {
  try {
    const planets = await Planet.findAll();
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching planets.' });
  }
});

router.get('/planets/:id', async (req, res) => {
  try {
    const planet = await Planet.findByPk(req.params.id);
    if (planet) {
      res.status(200).json(planet);
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching planet.' });
  }
});
//router to add a planet
router.post('/planets/add', async (req, res) => {
  try {
    console.log("Function called");
    const planet = await Planet.create(req.body);
    res.status(201).json(planet);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating planet.' });
  }
});

module.exports = router;
