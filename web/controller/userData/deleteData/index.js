const { Users } = require('../../../../models');

const deleteData = async (req, res, next) => {
  try {
    if (!req?.query?._id) {
      const error = {
        status: 404,
        message: 'Id param is required',
      };
      throw error;
    }

    const deleteUser = await Users.deleteOne({ _id: req?.query?._id });

    res.send({
      status: 200,
      message: 'User Deleted Successfully',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteData;
