const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const codersUserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

const CodersUsers = mongoose.model('codersUsers', codersUserSchema);

module.exports = CodersUsers;
