const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanjiSchema = new Schema({
    type: {
        type: String,
    },
    character: {
        type: String,
    },
    OnReading: {
        type: String,
    },
    KunReading: {
        type: String,
    },
    Meaning: {
        type: String,
    }

})

module.exports = mongoose.model("Kanji", kanjiSchema)