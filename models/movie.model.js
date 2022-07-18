const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        maxLength: [40, 'The title is too long, no need more than 40 chars'],
        minLength: [2, 'The title need at least 2 chars'],
        trim: true
    },
    genre: {
        type: String,
        trim: true,
    },
    plot: {
        type: String,
        maxLength: [120, 'The plot is too long, no need more than 50 chars'],
        minLength: [20, 'The plot need at least 20 chars'],
        trim: true,
        required: true
    },
    mainCelebrity: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "celebrity"
    }
})

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;