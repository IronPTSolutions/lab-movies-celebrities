const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    default: "unknown",
  },
  catchPhrase: String,
  movie: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
}]
});



const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;
