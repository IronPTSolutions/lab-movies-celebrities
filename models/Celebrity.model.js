//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name:{
        type: String,
        required: 'Name is required',
        minLength: [2, "Name needs at least 2 chars"],
    },

    occupation:{
        type: String,
        default: 'unknown',//required: 'Ocuppation is required',

    },

    catchPhrase:{
        type: String,
        required: 'CatchPhrase is required',
        //minLength: [3, "Phrase needs at least 3 chars"]
    },
})

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity


/*
const taskSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
    minLength: [3, "Title needs at least 3 chars"],
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  description: {
    type: String,
    minLength: [10, "Description needs at least 3 chars"],
  },
  image: {
    type: String,
    default: "https://loremflickr.com/320/240/brazil",
    validate: {
      validator: function (image) {
        try {
          new URL(image);
          return true;
        } catch (error) {
          return false;
        }
      },
      message: (image) => `Invalid URL`,
    },
  },
});

taskSchema.pre("validate", function (next) {
  this.image = this.image || undefined;
  this.description = this.description || undefined;
  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;*/