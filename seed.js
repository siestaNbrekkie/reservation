const db = require('./database/index.js');

for (let i = 0; i < 100; i += 1) {
  // Note: using `force: true` will drop the table if it already exists
  db.Listing.sync({ force: true }).then(() => db.Listing.create({
    pricePerNight: Math.floor(Math.random() * 1000) + 1,
    ratings: ((Math.random() * 4) + 1).toFixed(2),
    reviews: Math.floor(Math.random() * 500) + 1,
    serviceFee: Math.floor(Math.random() * 300) + 1,
    maxGuest: Math.floor(Math.random() * 20) + 1,
    lowerBoundGuestNum: Math.floor(Math.random() * 5),
  }));

  db.UnavailableDates.sync({ force: true }).then(() => db.UnavailableDates.create({
    day: Math.floor(Math.random() * (8 - 1) + 1),
    month: Math.floor(Math.random() * (13 - 1) + 1),
    year: new Date().getFullYear(),
  }));
}
