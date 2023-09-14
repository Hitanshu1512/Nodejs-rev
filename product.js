const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("products", ProductsSchema);
