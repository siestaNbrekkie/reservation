const Sequelize = require('sequelize');

const sequelize = new Sequelize('reservations', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Sequelize.Model.init(attributes, options) = sequelize.define(modelName, attributes, options)
const { Model } = Sequelize;
class Listing extends Model { }
Listing.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  pricePerNight: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ratings: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  reviews: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  serviceFee: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  maxGuest: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lowerBoundGuestNum: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'listing',
  // options
});

const UnavailableDates = sequelize.define('unavailable_dates', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  day: {
    type: Sequelize.INTEGER,
  },
  month: {
    type: Sequelize.INTEGER,
  },
  year: {
    type: Sequelize.INTEGER,
  },
}, {
  // options
  indexes: [
    {
      unique: true,
      fields: ['day', 'month', 'year', 'listingId'],
    },
  ],
  timestamps: false,
});

// Associations
Listing.hasMany(UnavailableDates);

console.log('testing connection');

module.exports = {
  Listing,
  UnavailableDates,
};
