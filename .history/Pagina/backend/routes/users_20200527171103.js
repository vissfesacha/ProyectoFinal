  
const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt=require('bcrypt');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.username,10,(err,hash)=>{
     
  if(err){
    return res.status(500).json({
      error:err
    });
    
    } else{
    
      const user= new User({
        username:req.body.username,
        password:hash
     
       });
       
    }
  });
 


  
});

module.exports = router;