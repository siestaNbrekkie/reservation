const faker = require('faker');
const db = require('./database/index.js');

// Generate fake random data for column in a table then push into database
// Faker data of the following format below:
// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// ONLY need faker for dates

// Note: using `force: true` will drop the table if it already exists
db.Reservation.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return db.Reservation.create({
        pricePerNight: 1,
        ratings: 1,
        reviews: 1,
        serviceFee: 1,
        maxGuest: 1,
        lowerBoundGuestNum: 1
    });
});
