
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {    
        type: String, 
        required: true,
        unique: true,
        trim: true,
        minlength: 3  
      },
   password:{
        type :String ,
        required:true
      },
      email:{
        type :String ,
        unique: true,
        required:false
      },
   cart: {
        type: Array,
        default: []
},
admin:{
  type: Boolean,
  default:false
}
  
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;