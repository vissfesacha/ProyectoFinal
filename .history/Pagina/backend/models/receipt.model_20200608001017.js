const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiptSchema = new Schema({
  userid: { type: String, required: true },
  products: {
    type: Array,
    default: []
},
value: { type:Number, required: true },
  date: { type: Date, required: false },
  
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Receipt', receiptSchema);

module.exports = Exercise;