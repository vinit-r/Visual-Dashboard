const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CodersUsers = require('../../../../models/authUsers');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req?.body;
    if (!(password && email)) {
      const loginError = {
        status: 404,
        message: 'Password and Email is Required',
      };
      throw loginError;
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

    const passCheck = await bcrypt.compare(password, getUser?.password);

    if (!passCheck) {
      const wrongPasswordError = {
        status: 404,
        message: 'Please enter valid password',
      };
      throw wrongPasswordError;
    }

    const secretKey = 'Vinit_Pawar';
    const payload = { _id: getUser?._id };
    const options = {
      expiresIn: '1h',
    };
    const token = jwt.sign(payload, secretKey, options);
    res.header('auth-token', token).send({ token: token });

    const verifyToken = req?.headers['authorization'];
    console.log('verifyToken', verifyToken);

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
