const { Users } = require('../../../../models');

const createData = async (req, res, next) => {
  try {
    // const data = {
    //   name: req?.body?.name,
    //   age: req?.body?.age,
    //   mail: req?.body?.mail,
    //   work: req?.body?.work,
    // };
    const addUser = await Users.create(req?.body);
    console.log('this is CreateData', addUser);
    res.send({
      status: 200,
      message: 'success',
      data: addUser,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createData;
