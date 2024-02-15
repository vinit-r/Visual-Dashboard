const { Users } = require('../../../../models');

const updateData = async (req, res, next) => {
  try {
    if (!req?.query?._id) {
      const error = {
        staus: 404,
        message: '_id param is required',
      };
      throw error;
    }

    const updateUser = await Users.findOneAndUpdate(
      { _id: req?.query?._id },
      req?.body
    );
    res.send({
      status: 200,
      message: 'Update Successfull',
      data: updateUser,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = updateData;
