const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {
        type: String,
        maxLength: [40, 'The celebrity name is too long, no need more than 40 chars'],
        trim: true,
        required: true
    },
    occupation: {
        type: String,
        default: 'unknown',
        trim: true,
    },
    catchPhrase: {
        type: String,
        maxLength: [50, 'The catch phrase is too long, no need more than 50 chars'],
        minLength: [20, 'The catch phrase need at least 20 chars'],
        trim: true,
        required: true
    }
})

const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;