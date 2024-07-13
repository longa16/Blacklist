const mongoose = require('mongoose');

const blacklist = new mongoose.Schema({
  Number: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Blacklist', blacklist);
