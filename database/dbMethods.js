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

  getDates: (req, res) => {
    const { id } = req.params;

    db.Calendar.findOne({ where: { id } })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
