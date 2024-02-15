const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    end_year: {
      type: Date,
    },
    intensity: {
      type: Number,
    },
    sector: {
      type: String,
    },
    topic: {
      type: String,
    },
    insight: {
      type: String,
    },
    url: {
      type: String,
      createdDate: Date.now,
    },
    region: {
      type: String,
    },
    start_year: {
      type: Date,
    },
    impact: {
      type: String,
    },
    added: {
      type: String,
      default: Date,
    },
    published: {
      type: String,
      default: Date,
    },
    country: {
      type: String,
    },
    relevance: {
      type: Number,
    },
    pestle: {
      type: String,
    },
    source: {
      type: String,
    },
    title: {
      type: String,
    },
    likelihood: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model('dashusers', UserSchema);

module.exports = Users;
