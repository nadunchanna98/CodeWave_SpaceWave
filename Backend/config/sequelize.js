const Sequelize = require('sequelize');

const sequelize = new Sequelize('spacewave', 'root', 'Gepn43159770', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.sync({  })
  .then(() => {
    console.log('Drop and re-sync db.');
  })
  .catch((error) => {
    console.error('An error occurred while syncing the database:', error);
  });

module.exports = sequelize;
