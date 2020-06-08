const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiptSchema = new Schema({
  model: { type: String, required: true },
  code: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  value: { type:Number, required: true },
  size: { type: Number, required: true },
  stock: { type: Number, required: true },
  style: { type: String, required: true },
  date: { type: Date, required: false },
  
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Receipt', receiptSchema);

module.exports = Exercise;