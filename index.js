require('dotenv').config();
var cors = require('cors');
const express = require('express');
const createError = require('http-errors');
const connectMongoDb = require('./utils/connections/mongodb');

const {
  userDataRouter,
  moviesDataRouter,
  codersUserRouter,
} = require('./web/routes/index');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Visualization Dashbord Project');
});

app.use('/userData', userDataRouter);
app.use('/moviesData', moviesDataRouter);
app.use('/coderUsers', codersUserRouter);

app.use(async (req, res, next) => {
  next(createError.NotFound('This route does not exist'));
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const port = 8000;

connectMongoDb().then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
