const jwt = require('jsonwebtoken');

const signAccessToken = (userID) => {
  const secretKey = 'Vinit_Pawar';
  const payload = { userID: userID };
  const options = {
    expiresIn: '1h',
  };

  const token = jwt.sign(payload, secretKey, options);
  // console.log('token', token);
  if (!token) {
    const accessTokenError = {
      status: 404,
      message: 'Access Token Error',
    };
    throw accessTokenError;
  }
  res.header('auth-token', token).send({
    token: token,
  });
};

const verifyAccessToken = (res, req, next) => {
  const accessToken = req?.headers;
  const bearerToken = accessToken?.split(' ')[1];

  const VERIFY_TOKEN_KEY = 'vinit_rahangdale';
  const options = {
    expiresIn: '1d',
  };
  const payload = jwt.verify(bearerToken, VERIFY_TOKEN_KEY, options);
  if (!payload) {
    const verifyTokenError = {
      status: 404,
      message: 'provide a valid access token',
    };
    throw verifyTokenError;
  }

  req.payload = payload;
  next();
};
