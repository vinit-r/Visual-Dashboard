const { Movies } = require('../../../../models');

const addMovies = async (req, res, next) => {
  try {
    const totalSeat = req?.body?.seat;
    let seperatedSeat = [];
    for (i = 1; i <= totalSeat + 1; i++) {
      seperatedSeat.push(i);
    }
    // console.log('seperatedSeat', seperatedSeat);
    const bodyData = {
      movie_name: req?.body?.movie_name,
      theater_name: req?.body?.theater_name,
      seat: seperatedSeat,
      time: req?.body?.time,
    };
    const addMoviesData = await Movies.create(bodyData);
    // console.log('this is addMoviesData');
    res.send({
      status: 200,
      message: 'success',
      data: addMoviesData,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = addMovies;
