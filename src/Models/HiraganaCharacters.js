const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this will cover both hiragana and katakana, the name becomes inconveniently long....


const hiraganaSchema = new Schema({
  character: {
    type: String,
  },
  reading: {
    type: String,
  },
  type: {
    type: String,
  }
})

module.exports = mongoose.model("Hiragana", hiraganaSchema)

