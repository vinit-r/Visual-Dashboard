const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CodersUsers = require('../../../../models/authUsers');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req?.body;
    if (!(password && email)) {
      const error = {
        status: 404,
        message: 'Password and Email is Required',
      };
      throw error;
    }
    const getUser = await CodersUsers.findOne({ email });
    // console.log('getUser', getUser);

    if (!getUser) {
      const userNotFoundError = {
        status: 404,
        message: 'User not found',
      };
      throw userNotFoundError;
    }

    if (!(await bcrypt.compare(password, getUser?.password))) {
      const passwordError = {
        status: 404,
        message: 'Please enter valid password',
      };
      throw passwordError;
    }
    const secretKey = 'Vinit Pawar';
    const payload = { _id: getUser?._id };
    const options = {
      expiresIn: '1h',
    };
    const token = jwt.sign(payload, secretKey, options);
    res.header('auth-token', token).send({ token: token });

    res.send({
      status: 200,
      message: 'Success',
      data: getUser,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = loginUser;
