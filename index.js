const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const DatabaseUrl = "mongodb://localhost:27017/e-comm";

mongoose.connect(DatabaseUrl);

// Schema
const ProductsSchema = new mongoose.Schema({
  id: String,
  name: String,
  brand: String,
  price: String,
  category: String,
});

const saveInDb = async () => {
  // Model
  const ProductsModel = new mongoose.model("products", ProductsSchema);
  const data = new ProductsModel({
    id: "12345",
    name: "Galaxy Note 10",
    brand: "Samsung",
    price: "Rs. 90000",
    category: "Smartphones",
  });

  let result = await data.save();
  console.log(result);
};

// saveInDb(); // call this to save the data in database

const updateInDb = async () => {
  const Product = new mongoose.model("products", ProductsSchema);
  let data = await Product.updateOne(
    { name: "Ninja 3" },
    { $set: { name: "Pinja Pro" } }
  );
  console.log(data);
};

// updateInDb(); // call this to update the data in database

const deleteInDb = async () => {
  const Product = new mongoose.model("products", ProductsSchema);
  let data = await Product.deleteOne({ name: "Galaxy Note 10" });
  console.log(data);
};

// deleteInDb(); // call this to delete the data in database

const findInDb = async () => {
    const Product = new mongoose.model("products", ProductsSchema);
    let data = await Product.find();
    console.log(data);
  };

findInDb(); // call this to find/get all the data from the database

app.listen(port, () => console.log(`App listening on port ${port}!`));