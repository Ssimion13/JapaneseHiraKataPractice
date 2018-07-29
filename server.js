const express = require("express")
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const port = process.env.PORT || 7000;


app.use(bodyParser.json());
app.use(morgan('dev'));


app.use("/Hiragana", require('./Routes/HiraganaCharacters.js'))
app.use("/Vocab", require('./Routes/Vocab.js'))
app.use("/Kanji", require('./Routes/Kanji.js'))


mongoose.connect('mongodb://localhost/TeachingJapanese', err => {
  if (err) throw err;
  console.log("DB Connected.")
})

app.listen(port, () => {
  console.log("Listening in port " + port)
});
