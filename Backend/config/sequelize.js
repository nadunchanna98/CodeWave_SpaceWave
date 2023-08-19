const Sequelize = require('sequelize');

const sequelize = new Sequelize('spacewave', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.sync({ force: true })
  .then(() => {
    console.log('Drop and re-sync db.');
  })
  .catch((error) => {
    console.error('An error occurred while syncing the database:', error);
  });

module.exports = sequelize;
