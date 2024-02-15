const express = require('express');
const { signUpUser, loginUser } = require('../../controller');

const codersUserRouter = express.Router();

codersUserRouter.post('/addUser', signUpUser);
codersUserRouter.get('/getUser', loginUser);

module.exports = codersUserRouter;
