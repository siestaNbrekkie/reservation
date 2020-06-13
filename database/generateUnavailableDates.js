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

      // console.log(`=========================================WHAT'S I:${i}=========================================`)
      // console.log(`=====================HERE'S ID:${id}========================`)
      if (id % 10 === 0) { // 100
        // console.log('apparently id divisible by TEN', id);
        console.log(id);
      }
      const listingId = id;

      const dates = new Set([]);

      for (let j = 1; j <= 10; j += 1) { // 100
        // console.log(`----------------LET'S PRINT OUT J:${j}----------------`)
        let day = Math.floor(Math.random() * (8 - 1) + 1);
        let month = Math.floor(Math.random() * (13 - 1) + 1);
        let year = new Date().getFullYear();
        const date = `${day}/${month}/${year}`;

        const IsUniqueThenAddDate = (dateStr) => {
          // console.log('DATESTRING:', dateStr)
          if (!dates.has(dateStr)) {
            // console.log('DATESTRING UNIQUE:', dateStr)
            dates.add(dateStr);
          } else {
            // console.log('NOT UNIQUE, PRODUCE NEW DATESTRING')
            day = Math.floor(Math.random() * (8 - 1) + 1);
            month = Math.floor(Math.random() * (13 - 1) + 1);
            year = new Date().getFullYear();
            const newDate = `${day}/${month}/${year}`;
            IsUniqueThenAddDate(newDate);
          }
        };

        IsUniqueThenAddDate(date);

        // console.log('+++++++++++++++++++++++++++++++WELL HEY OUTSIDE INNER FUNC+++++++++++++++++++++++++++++++')

        const data = `${1000 - i},${listingId},${day},${month},${year}\n`;
        i -= 1;
        // console.log('HERE IS THE NEXT ID:', id)

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
