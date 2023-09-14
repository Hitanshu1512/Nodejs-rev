const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + Date.now() + ".jpg");
    },
  }),
}).single("userImg");

// app.get('/', (req, res) => res.send('Hello World!'))

app.post("/upload", fileUpload, (req, res) => {
  res.send("File uploaded successfully!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// ainasepics.getMultiple({ name: 'cat', limit: 5 }) // Max limit is 5
// .then(search => console.log(search.results))
// .catch(err => console.error(err));
