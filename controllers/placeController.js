const { application } = require("express");
const Place = require("../models/Place");

const placeController = {
  getAll: (req, res) => {
    Place.find()
      .then((data) => {
        res.json(data);
        //('====================================');
        //(" requst geldi");
        //("====================================");
      }) //
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    let id = req.params.id;

    Place.findById(id)
      .then((data) => {
        if (data) res.json(data);
        else res.status(400).json({ msg: "Not Found!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  postmany: (req, res) => {
    let data = req.body;
    let allplaces = [];
    for (let item of data) {
      if (item) {
        let place = new Place({
          name: item.name,
          categoryId: item.categoryId,
          rate: item.rate,
          lat: item.lat,
          long: item.long,
          imageUrl: item.imageUrl,
          openCloseTime: item.openCloseTime,
          adress: item.adress,
          phone: item.phone,
          isSaved: item.isSaved,
        });
        place.save();
        allplaces.push(place);
      }
    }

    res.json({ all: allplaces });
  },
  add: (req, res) => {
    var place = new Place({
      name: req.body.name,

      categoryId: req.body.categoryId,
      rate: req.body.rate,
      lat: req.body.lat,
      long: req.body.long,
      imageUrl: req.body.imageUrl,
      openCloseTime: req.body.openCloseTime,
      adress: req.body.adress,
      phone: req.body.phone,
      isSaved: req.body.isSaved,
    });

    place.save();

    res.json(place);
  },
  delete: (req, res) => {
    let id = req.params.id;

    Place.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = placeController;
