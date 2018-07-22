const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this will cover both katakana and katakana, the name becomes inconveniently long....

const katakanaSchema = new Schema({
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

module.exports = mongoose.model("Katakana", katakanaSchema)

