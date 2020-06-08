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
    const model = req.body.model;
    const code = req.body.code;
    const brand = req.body.brand;
    const description = req.body.description;
    const value = Number(req.body.value);
    const size = req.body.size;
    const stock = req.body.stock;
    const style = req.body.style;
    const date = Date.parse(req.body.date);
    const image = "/"+req.file.originalname;
  
    const newProduct = new Products({
      model,
      code,
      brand,
      description,
      value,
      size,
      stock,
      style,
      date,
      image
    });
  
    newProduct.save()
    .then(() => res.json('Product added'))
    .catch(err => res.status(400).json('Error: ' + err));
  
  });



module.exports = router;