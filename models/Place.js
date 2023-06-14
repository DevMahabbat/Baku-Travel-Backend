const { default: mongoose } = require("mongoose");

const PlaceSchema = new mongoose.Schema({
 name: String,
  categoryId: String,
  rate: String,
  lat: String,
  long: String,
  imageUrl: String,
  openCloseTime: String,
  adress: String,
  phone: String,
  isSaved: Boolean,
});

const Place = mongoose.model("place", PlaceSchema);
 
module.exports = Place;