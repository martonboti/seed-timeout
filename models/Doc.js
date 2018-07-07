const mongoose = require('mongoose');

const Doc = mongoose.model('Doc', {
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150
  },
  slug: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150,
    unique: true
  }
});

module.exports = { Doc };
