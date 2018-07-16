const env = require("dotenv").config();  
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 7000;
const path = require("path")


process.env = {
  ...process.env,
  ...env.parsed
}

app.use(bodyParser.json());
app.use(morgan('dev'));


 // app.use("/Vocab", require('./routes/Vocab.js'));
app.use("/Hiragana", require('./Routes/HiraganaCharacters.js'));



//process.env.MONGODB_URI || 
mongoose.connect('mongodb://localhost/TeachingJapanese', err => {
  if (err) throw err;
  console.log("DB Connected.")
})

app.listen(process.env.PORT, () => {
  console.log("Listening in port " + port)
});
