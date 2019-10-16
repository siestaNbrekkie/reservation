const db = require('./index.js');

module.exports = {
  getListings: (req, res) => {
    db.Listing.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
