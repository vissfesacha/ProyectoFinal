const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  value: { type:Number, required: true },
  date: { type: Date, required: false },
  image:{type:String , required:true},
  
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Products', exerciseSchema);

module.exports = Exercise;