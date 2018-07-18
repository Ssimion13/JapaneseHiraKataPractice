const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanjiSchema = new Schema({
    type: {
        type: String,
    },
    character: {
        type: String,
    },
    onReading: {
        type: String,
    },
    kunReading: {
        type: String,
    },
    meaning: {
        type: String,
    }

})

module.exports = mongoose.model("Kanji", characterSchema)