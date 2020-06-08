const router = require('express').Router();
let User = require('../models/user.model');
let Product = require('../models/products.model');
let Receipt = require('../models/receipt.model');


router.route('/').get((req, res) => {
    Receipt.find()
      .then(receipts => res.json(receipts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/create', (req, res) => {
    console.log('HOLIWIS')
    const newReceipt = new Receipt({
      userid: req.body.userid,
      products: req.body.prods,
      value: req.body.value,
      date: req.body.date
    });
    newReceipt.save()
    .then(() => res.json(newReceipt))
    .catch(err => res.status(400).json('Error: ' + err));
  
  });



module.exports = router;