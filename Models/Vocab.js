const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vocabSchema = new Schema({
    type: {
        type: String,
    },
    word: {
        type: String,
    },
    romaji: {
        type: String,
    },
    kanji: {
        type: String,
    },
    grammarType: {
        type: String,
    },
    Meaning: {
        type: String,
    },

})

module.exports = mongoose.model("Vocab", vocabSchema)
