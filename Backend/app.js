const cors = require("cors");
const express = require("express");
const planetRoutes = require('./routes/planet');
const agencyRoutes = require('./routes/Agency');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api', planetRoutes);  //http://localhost:8080/api/planets
app.use('/api', agencyRoutes);  //http://localhost:8080/api/agencies


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SpaceWave - Backend!!!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});