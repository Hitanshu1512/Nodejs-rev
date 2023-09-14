const express = require("express");
const config = require("./config");
const Product = require("./product");
const port = 5000;
const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  await data.save(); // mongoose function to save data to db
  res.send(data);
});

app.get("/list", async (req, res) => {
  let data = await Product.find();
  console.log(data);
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  const id = req.params.id;
  let data = await Product.deleteOne({ id: id });
  res.send(data);
  console.log("Requested item deleted!");
});

app.put("/update/:_id", async (req, res) => {
//   console.log(req.params);
  let data = await Product.updateOne(
    req.params,
    { 
        $set: req.body 
    });
  res.send(data);
  console.log("Requested item updated!");
});

app.listen(5000, () => {
  console.log(`App running at port ${port}`);
});
