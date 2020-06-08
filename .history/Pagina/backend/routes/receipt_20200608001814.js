const router = require('express').Router();
let User = require('../models/user.model');
let Product = require('../models/products.model');
let Receipt = require('../models/receipt.model');


router.route('/').get((req, res) => {
    User.find()
      .then(receipts => res.json(receipts))
      .catch(err => res.status(400).json('Error: ' + err));
  });



module.exports = router;