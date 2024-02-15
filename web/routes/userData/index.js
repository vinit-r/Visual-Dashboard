const express = require('express');
const {
  createData,
  getData,
  updateData,
  deleteData,
} = require('../../controller');

const userDataRouter = express.Router();

userDataRouter.post('/createData', createData);
userDataRouter.get('/getData', getData);
userDataRouter.put('/updateData', updateData);
userDataRouter.delete('/deleteData', deleteData);

module.exports = userDataRouter;
