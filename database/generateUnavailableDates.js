const fs = require('fs');
const path = require('path');

const writeUsers = fs.createWriteStream(path.resolve(__dirname, './unavailableDates.csv'));
writeUsers.write('id,listingId,day,month,year\n', 'utf8');

const writeTenThousandUnavailableDates = (writer, encoding, callback) => {
  let i = 1000; // 10,000
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      if (i % 10 === 0) {
        i -= 1;
      }
      id += 1;

      if (id % 10 === 0) { // 100
        console.log(id);
      }
      const listingId = id;

      const dates = new Set([]);
      let initialSetSize = dates.size;
      // console.log("INITIALSETSIZE======", initialSetSize)

      while (dates.size < 10) { // 100
        const day = Math.floor(Math.random() * (8 - 1) + 1);
        const month = Math.floor(Math.random() * (13 - 1) + 1);
        const year = new Date().getFullYear();
        const date = `${day}/${month}/${year}`;

        dates.add(date);

        const differenceInSet = dates.size - initialSetSize;
        // console.log('+++DIFF IN SET++++', differenceInSet);
        // console.log('LISTINGID:', id);

        if (differenceInSet) {
          initialSetSize += 1;
          const data = `${1000 - i},${listingId},${day},${month},${year}\n`;
          i -= 1;

          if (i === 0) {
            writer.write(data, encoding, callback);
          } else {
            ok = writer.write(data, encoding);
          }

          // if (dates.size % 100) {
          //   console.log('SIZE OF DATES', dates.size);
          // }
        }
      }
      // console.log('SET SIZE MUST BE 10 NOW', dates.size);
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
