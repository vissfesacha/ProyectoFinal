const router = require('express').Router();
let User = require('../models/user.model');
let Product = require('../models/products.model');
let Receipt = require('../models/receipt.model');


router.route('/').get((req, res) => {
    User.find()
      .then(receipts => res.json(receipts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/create', (req, res) => {
    const userid = req.body.userid;
    const value = Number(req.body.value);
    const date = Date.parse(req.body.date);
    co
    const newReceipt = new Receipt({
      userid: req.body.userid,
      products: req.body.products,
      value: req.body.value,
      date: req.body.date
    });
    newReceipt.save()
    .then(() => res.json(newReceipt))
    .catch(err => res.status(400).json('Error: ' + err));
  
  });



module.exports = router;