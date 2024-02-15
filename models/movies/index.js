const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    movie_name: {
      type: String,
    },
    theater_name: {
      type: String,
    },
    time: {
      type: Array,
    },
    seat: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Movies = mongoose.model('movies', MoviesSchema);

module.exports = Movies;
