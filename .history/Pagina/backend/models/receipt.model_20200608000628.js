const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiptSchema = new Schema({
  model: { type: String, required: true },
  
  date: { type: Date, required: false },
  
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Receipt', receiptSchema);

module.exports = Exercise;