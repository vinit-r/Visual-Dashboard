const { Movies } = require('../../../../models');

const getShows = async (req, res, next) => {
  try {
    if (!req?.query) {
      const error = {
        status: 404,
        message: 'param is required',
      };
      throw error;
    }
    const getMovies = await Movies.find(req?.query);

    res.send({
      status: 200,
      message: 'Success',
      data: getMovies,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getShows;
