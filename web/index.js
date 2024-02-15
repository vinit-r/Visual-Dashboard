// const express = require('express');
// const createError = require('http-errors');

// const { userDataRouter } = require('./routes');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Visualization Dashbord Project');
// });

// app.use('/userData', userDataRouter);

// app.use(async (req, res, next) => {
//   next(createError.NotFound('This route does not exist'));
// });

// app.use(async (err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     error: {
//       status: err.status || 500,
//       message: err.message,
//     },
//   });
// });

// const port = 8000;

// app.listen(port, () => {
//   console.log(`server running on port ${port}`);
// });
