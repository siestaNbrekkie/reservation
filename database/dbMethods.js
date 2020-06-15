const db = require('./index.js');

module.exports = {
  getListing: (req, res) => {
    const { id } = req.params;

    db.Listing.findOne({ where: { id } })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  getUnavailableDates: (req, res) => {
    const { id } = req.params;
    const { month } = req.query;

    db.UnavailableDates.findAll({ where: { listingId: id, month } })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
