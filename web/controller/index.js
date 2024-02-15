const { createData, getData, updateData, deleteData } = require('./userData');
const { addMovies, getShows, bookShows } = require('./moviesData');
const { signUpUser, loginUser } = require('./codersUsers');

module.exports = {
  createData,
  getData,
  updateData,
  deleteData,

  addMovies,
  getShows,
  bookShows,

  signUpUser,
  loginUser,
};
