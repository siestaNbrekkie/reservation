const faker = require('faker');
const db = require('./database/index.js');

// Generate fake random data for column in a table then push into database
// Faker data of the following format below:
// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// ONLY need faker for dates

// Note: using `force: true` will drop the table if it already exists
db.Price.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return db.Price.create({
        pricePerNight: 1,
        serviceFee: 1,
        totalPrice: 1
    });
});

db.Calendar.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return db.Calendar.create({
        dateFrom: 1,
        dateTill: 1,
        nightCount: 1
    });
});

db.Guest.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return db.Guest.create({
        adultCount: 1,
        childCount: 1,
        infantCount: 1
    });
});
