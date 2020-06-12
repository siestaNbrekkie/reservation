const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './unavailableDates.csv'));
writeUsers.write('id,listingId,day,month,year\n', 'utf8');

const writeTenThousandUnavailableDates = (writer, encoding, callback) => {
  let i = 10000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (id % 100 === 0) {
        console.log(id);
      }

      const listingId = id;

      const dates = new Set([]);

      for (let j = 1; j <= 100; j += 1) {
        let day = Math.floor(Math.random() * (8 - 1) + 1);
        let month = Math.floor(Math.random() * (13 - 1) + 1);
        let year = new Date().getFullYear();
        const date = `${day}${month}${year}`;

        const IsUniqueThenAddDate = (dateStr) => {
          if (!dates.has(dateStr)) {
            dates.add(dateStr);
          } else {
            day = Math.floor(Math.random() * (8 - 1) + 1);
            month = Math.floor(Math.random() * (13 - 1) + 1);
            year = new Date().getFullYear();
            const newDate = `${day}${month}${year}`;
            IsUniqueThenAddDate(newDate);
          }
        };

        IsUniqueThenAddDate(date);

        const data = `${id},${listingId},${day},${month},${year}\n`;
        id += 1;

        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeTenThousandUnavailableDates(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
