const sequelize = require('./config/sequelize');

const Planet = require('./models/Planet');
const Agency = require('./models/Agency');
const Passenger = require('./models/Passenger');
const User = require('./models/User');
const Travel_Class = require('./models/Travel_Class');
const Shuttle_Service = require('./models/Shuttle_Service');
const Shuttle_Details = require('./models/Shuttle_Details');
const Seat_Details = require('./models/Seat_Details');
const Reservation = require('./models/Reservation');
const Payment_Status = require('./models/Payment_Status');
const Shuttle_Cost = require('./models/Shuttle_Cost');
const Service_Offering = require('./models/Shuttle_Service');


// Create dummy data
async function createDummyData() {
  try {
    await sequelize.sync({   }); // This will recreate tables

    const planet = await Planet.create({
     
      PlanetName: 'Earth',
      Temperature: 20,
      PlanetDescription: 'Blue planet',
    });

    const agency = await Agency.create({
    
      Planet_ID: planet.Planet_ID,
      AgencyName: 'Space Travel Inc.',
      AgencyLocation: 'Space City',
    });

    const passenger = await Passenger.create({
     
      FirstName: 'John',
      LastName: 'Doe',
      Address: '123 Main St',
      PhoneNumber: 1234567860,
      City: 'Cityville',
      State: 'State',
      Zipcode: '12345',
      Country: 'Country',
    });

    
    const travelClass = await Travel_Class.create({
      
      Travel_Class_Name: 'Economy',
      Travel_Class_Capacity: 200,
    });

    

    const shuttleDetails = await Shuttle_Details.create({
     
      Source_Agency_ID: agency.Agency_ID,
      Destination_Agency_ID: agency.Agency_ID,
      RoundTrip: 'Y',
      Departure_Date_Time: new Date(),
      Arrival_Date_time: new Date(),
      Shuttle_Type: 'Regular',
    });

    const seatDetails = await Seat_Details.create({
      
      Travel_Class_ID: travelClass.Travel_Class_ID,
      shuttle_ID: shuttleDetails.Shuttle_ID,
    });

   

 
   
    

    console.log('Dummy data created successfully');
  } catch (error) {
    console.error('Error creating dummy data:', error);
  } finally {
    sequelize.close();
  }
}

createDummyData();
