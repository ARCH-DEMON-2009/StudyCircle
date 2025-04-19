const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
  question: { type: String, required: true },
});

module.exports = mongoose.model('Doubt', doubtSchema);
