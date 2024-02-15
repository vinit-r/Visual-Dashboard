const { Movies } = require('../../../../models');

const bookShows = async (req, res, next) => {
  try {
    if (!req?.query) {
      const error = {
        status: 404,
        message: 'param is required',
      };
      throw error;
    }
    const getShow = await Movies.find(req?.query);
    console.log('bookShows page', getShow);

    res.send({
      status: 200,
      message: 'Success',
      //   data: getMovies,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = bookShows;
