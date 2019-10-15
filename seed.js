const faker = require('faker');
const db = require('./database/index.js');

// Generate fake random data for column in a table then push into database
// ONLY need faker for dates

for (let i = 0; i < 100; i++) {
    // Note: using `force: true` will drop the table if it already exists
    db.Listing.sync({ force: true }).then(() => {
        // Now the `reservations` table in the database corresponds to the model definition
        return db.Listing.create({
            pricePerNight: Math.floor(Math.random() * 1000) + 1,
            ratings: ((Math.random() * 4) + 1).toFixed(2),
            reviews: Math.floor(Math.random() * 500) + 1,
            serviceFee: Math.floor(Math.random() * 300) + 1,
            maxGuest: Math.floor(Math.random() * 20) + 1,
            lowerBoundGuestNum: Math.floor(Math.random() * 5)
        });
    });

    db.Calendar.sync({ force: true }).then(() => {
        return db.Calendar.create({
            october1: !!Math.floor(Math.random() * 2),
            october2: !!Math.floor(Math.random() * 2),
            october3: !!Math.floor(Math.random() * 2),
            october4: !!Math.floor(Math.random() * 2),
            october5: !!Math.floor(Math.random() * 2),
            october6: !!Math.floor(Math.random() * 2),
            october7: !!Math.floor(Math.random() * 2),
            october8: !!Math.floor(Math.random() * 2),
            october9: !!Math.floor(Math.random() * 2),
            october10: !!Math.floor(Math.random() * 2),
            october11: !!Math.floor(Math.random() * 2),
            october12: !!Math.floor(Math.random() * 2),
            october13: !!Math.floor(Math.random() * 2),
            october14: !!Math.floor(Math.random() * 2),
            october15: !!Math.floor(Math.random() * 2),
            october16: !!Math.floor(Math.random() * 2),
            october17: !!Math.floor(Math.random() * 2),
            october18: !!Math.floor(Math.random() * 2),
            october19: !!Math.floor(Math.random() * 2),
            october20: !!Math.floor(Math.random() * 2),
            october21: !!Math.floor(Math.random() * 2),
            october22: !!Math.floor(Math.random() * 2),
            october23: !!Math.floor(Math.random() * 2),
            october24: !!Math.floor(Math.random() * 2),
            october25: !!Math.floor(Math.random() * 2),
            october26: !!Math.floor(Math.random() * 2),
            october27: !!Math.floor(Math.random() * 2),
            october28: !!Math.floor(Math.random() * 2),
            october29: !!Math.floor(Math.random() * 2),
            october30: !!Math.floor(Math.random() * 2),
            october31: !!Math.floor(Math.random() * 2),
            november1: !!Math.floor(Math.random() * 2),
            november2: !!Math.floor(Math.random() * 2),
            november3: !!Math.floor(Math.random() * 2),
            november4: !!Math.floor(Math.random() * 2),
            november5: !!Math.floor(Math.random() * 2),
            november6: !!Math.floor(Math.random() * 2),
            november7: !!Math.floor(Math.random() * 2),
            november8: !!Math.floor(Math.random() * 2),
            november9: !!Math.floor(Math.random() * 2),
            november10: !!Math.floor(Math.random() * 2),
            november11: !!Math.floor(Math.random() * 2),
            november12: !!Math.floor(Math.random() * 2),
            november13: !!Math.floor(Math.random() * 2),
            november14: !!Math.floor(Math.random() * 2),
            november15: !!Math.floor(Math.random() * 2),
            november16: !!Math.floor(Math.random() * 2),
            november17: !!Math.floor(Math.random() * 2),
            november18: !!Math.floor(Math.random() * 2),
            november19: !!Math.floor(Math.random() * 2),
            november20: !!Math.floor(Math.random() * 2),
            november21: !!Math.floor(Math.random() * 2),
            november22: !!Math.floor(Math.random() * 2),
            november23: !!Math.floor(Math.random() * 2),
            november24: !!Math.floor(Math.random() * 2),
            november25: !!Math.floor(Math.random() * 2),
            november26: !!Math.floor(Math.random() * 2),
            november27: !!Math.floor(Math.random() * 2),
            november28: !!Math.floor(Math.random() * 2),
            november29: !!Math.floor(Math.random() * 2),
            november30: !!Math.floor(Math.random() * 2),
            december1: !!Math.floor(Math.random() * 2),
            december2: !!Math.floor(Math.random() * 2),
            december3: !!Math.floor(Math.random() * 2),
            december4: !!Math.floor(Math.random() * 2),
            december5: !!Math.floor(Math.random() * 2),
            december6: !!Math.floor(Math.random() * 2),
            december7: !!Math.floor(Math.random() * 2),
            december8: !!Math.floor(Math.random() * 2),
            december9: !!Math.floor(Math.random() * 2),
            december10: !!Math.floor(Math.random() * 2),
            december11: !!Math.floor(Math.random() * 2),
            december12: !!Math.floor(Math.random() * 2),
            december13: !!Math.floor(Math.random() * 2),
            december14: !!Math.floor(Math.random() * 2),
            december15: !!Math.floor(Math.random() * 2),
            december16: !!Math.floor(Math.random() * 2),
            december17: !!Math.floor(Math.random() * 2),
            december18: !!Math.floor(Math.random() * 2),
            december19: !!Math.floor(Math.random() * 2),
            december20: !!Math.floor(Math.random() * 2),
            december21: !!Math.floor(Math.random() * 2),
            december22: !!Math.floor(Math.random() * 2),
            december23: !!Math.floor(Math.random() * 2),
            december24: !!Math.floor(Math.random() * 2),
            december25: !!Math.floor(Math.random() * 2),
            december26: !!Math.floor(Math.random() * 2),
            december27: !!Math.floor(Math.random() * 2),
            december28: !!Math.floor(Math.random() * 2),
            december29: !!Math.floor(Math.random() * 2),
            december30: !!Math.floor(Math.random() * 2),
            december31: !!Math.floor(Math.random() * 2)
        });
    });
}


