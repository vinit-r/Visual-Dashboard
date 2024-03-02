const CodersUsers = require('../../../../models/authUsers');

const getUser = async (req, res, next) => {
  try {
    console.log('this is getuser api');
  } catch (error) {
    next(error);
  }
};

module.exports = getUser;
