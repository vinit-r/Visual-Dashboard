const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CodersUsers = require('../../../../models/authUsers');

const signUpUser = async (req, res, next) => {
  try {
    const bcryptPassword = await bcrypt.hash(req?.body?.password, 10);

    const user = {
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: bcryptPassword,
    };
    const addUsers = await CodersUsers.create(user);
    // console.log('addUsers', addUsers)

    const secretKey = 'Vinit Pawar';
    const payload = { _id: addUsers?._id };
    const options = {
      expiresIn: '1h',
    };
    const token = jwt.sign(payload, secretKey, options);
    // console.log('token', token);
    res
      .header('auth-token', token)
      .send({ status: 200, message: 'Success', data: addUsers, token: token });

    // res.send({
    //   status: 200,
    //   message: 'Success',
    //   data: addUsers,
    // });
  } catch (error) {
    next(error);
  }
};
module.exports = signUpUser;
