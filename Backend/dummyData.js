const sequelize = require("./config/sequelize");

const Planet = require("./models/Planet");
const Agency = require("./models/Agency");
const Passenger = require("./models/Passenger");
const User = require("./models/User");
const Travel_Class = require("./models/Travel_Class");
const Shuttle_Service = require("./models/Shuttle_Service");
const Shuttle_Details = require("./models/Shuttle_Details");
const Seat_Details = require("./models/Seat_Details");
const Payment_Status = require("./models/Payment_Status");
const Shuttle_Cost = require("./models/Shuttle_Cost");
const Service_Offering = require("./models/Shuttle_Service");
const Reservation = require("./models/Reservation");

// Create dummy data
async function createDummyData() {
  try {
    await sequelize.sync({}); // This will recreate tables

    const planet = await Planet.create({
      PlanetName: "Earth",
      Temperature: 20,
      PlanetDescription: "Blue planet",
    });
    const planet1 = await Planet.create({
      PlanetName: "Mars",
      Temperature: -80,
      PlanetDescription:
        'Mars is the fourth planet and the furthest terrestrial planet from the sun. The reddish color of surface is due to finely grained iron (iii)oxide dust in the soil, giving it the nickname "the Red Planet',
    });
    const planet2 = await Planet.create({
      PlanetName: "Jupiter",
      Temperature: -145,
      PlanetDescription:
        "Jupiter: Largest planet, fifth from the Sun. Gas giant with Great Red Spot storm. Hydrogen-helium atmosphere, distinct bands. Massive size, strong magnetic field. Moons, including Galilean moons. Significant gravitational influence on solar system.",
    });
    const planet3 = await Planet.create({
      PlanetName: "OGLE-2014-BLG",
      Temperature: -90,
      PlanetDescription:
        "As we venture towards OGLE-2014-BLG-0124L b, our journey spans a staggering 13,300 light-years through the cosmic expanse. This remote gas giant, with a mass akin to half of Jupiters, beckons exploration to unravel the mysteries of its distant realm, offering a glimpse into the diversity of planetary systems beyond our own.",
    });
    const planet4 = await Planet.create({
      PlanetName: "Kepler-452b",
      Temperature: -9,
      PlanetDescription:
        "Kepler-452b is a super-Earth exoplanet orbiting within the inner edge of the habitable zone of the sun-like star Kepler-452 and is the only planet in the system discovered by Kepler. It is located about 1,800 light-years from Earth in the constellation of Cygnus",
    });
    const planet5 = await Planet.create({
      PlanetName: "Neptune",
      Temperature: -218,
      PlanetDescription:
        "Neptune is dark, cold, and very windy. Its the last of the planets in our solar system. Its more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus.",
    });

    const agency = await Agency.create({
      Planet_ID: planet.Planet_ID,
      AgencyName: "Space Travel Inc.",
      AgencyLocation: "Space City",
    });
    const agency1 = await Agency.create({
      Planet_ID: planet1.Planet_ID,
      AgencyName: "Babylon 5",
      AgencyLocation: "Space Station Alpha",
    });
    const agency2 = await Agency.create({
      Planet_ID: planet2.Planet_ID,
      AgencyName: "Space Station Alpha",
      AgencyLocation: "The Axiom",
    });
    const agency3 = await Agency.create({
      Planet_ID: planet3.Planet_ID,
      AgencyName: "The Death Star",
      AgencyLocation: "Star Wars",
    });
    const agency4 = await Agency.create({
      Planet_ID: planet4.Planet_ID,
      AgencyName: "The Nostromo",
      AgencyLocation: "The Expanse",
    });
    const agency5 = await Agency.create({
      Planet_ID: planet5.Planet_ID,
      AgencyName: "Space Travel Inc.",
      AgencyLocation: "WALL-E",
    });
    const User1 = await User.create({
      Email: "2314sdfr@gmail.com",
      password: "987",
      user_Role: "passenger",
    });
    const User2 = await User.create({
      Email: "sdfr2435@gmail.com",
      password: "123Admin",
      user_Role: "Addmin",
    });
    const User3 = await User.create({
      Email: "reoi@gmail.com",
      password: "123",
      user_Role: "pasenger",
    });
    const User4 = await User.create({
      Email: "marywilliams@gmail.com",
      password: "password012",
      user_Role: "passenger",
    });
    const User5 = await User.create({
      Email: "davidbrown@gmail.com",
      password: "password345",
      user_Role: "pasengera",
    });
    
   

    console.log("Dummy data created successfully");
  } catch (error) {
    console.error("Error creating dummy data:", error);
  } finally {
    sequelize.close();
  }
}

createDummyData();
