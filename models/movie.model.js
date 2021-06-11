const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    },
    celebrity: [
        { type: Schema.Types.ObjectId, 
            ref: "Celebrity"
         }
    ] 
})

const Movie = mongoose.model('Movie', schema)

module.exports = Movie
/* movies: [{ type: Schema.Types.ObjectId, ref: "movies" }] */

/* schema.virtual('cast', {
    ref: 'Celebrity',
    localField: '_id',
    foreignField: 'celebrity',
    justOne: false,
  }); */