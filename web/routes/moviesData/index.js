const express = require('express');
const { addMovies, getShows, bookShows } = require('../../controller');

const moviesDataRouter = express.Router();

moviesDataRouter.post('/addMovies', addMovies);
moviesDataRouter.get('/getShows', getShows);
moviesDataRouter.get('/bookShows', bookShows);

module.exports = moviesDataRouter;
