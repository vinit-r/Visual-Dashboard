const mongoose = require('mongoose');
// const URI = 'mongodb://127.0.0.1:27017/visual_dash';
const URI = process.env.MONGODB_URL;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Detabase connection successfull');
  } catch (error) {
    console.error(error);
    console.log('Detabase connection unsuccessfull');
    process.exit(0);
  }
};

module.exports = connectMongoDb;
