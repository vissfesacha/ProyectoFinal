const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  model: { type: String, required: true },
  code: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  value: { type:Number, required: true },
  size: { type: Number, required: true },
  stock: { type: Number, required: true },
  style: { type: Number, required: true },
  date: { type: Date, required: false },
  image:{type:String , required:true},
  
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Products', productSchema);

module.exports = Exercise;