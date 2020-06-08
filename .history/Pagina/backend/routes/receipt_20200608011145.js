const router = require('express').Router();
let User = require('../models/user.model');
let Product = require('../models/products.model');
let Receipt = require('../models/receipt.model');


router.route('/').get((req, res) => {
    User.find()
      .then(receipts => res.json(receipts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
  
      if (err) {
        return res.status(500).json({
          error: err
        });
  
      } else {
  
        const user = new User({
          username: req.body.username,
          password: hash,
         
        });
        user.save()
          .then(() => res.json('User added'))
          .catch(err => res.status(400).json('Error: ' + err));
      }
    });
  
  });



module.exports = router;