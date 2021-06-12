
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    cast: [{
       type: Schema.Types.ObjectId, ref: 'Celebrity'
    }]

})


/* schema.virtual('cast', {
    ref: 'Celebrity',
    localField: '_id',
    foreignField: 'celebrity',
    justOne: false,
  });
 */
const Movie = mongoose.model('Movie', schema);
module.exports = Movie;