const router = require('express').Router();
let Products = require('../models/products.model.js');
const multer= require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './upload/');
  },
  filename: function(req, file, cb) {
    cb(null,  file.originalname);
  }
});
const upload= multer({storage:storage});

router.route('/').get((req, res) => {
  Products.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', upload.single('file'), (req, res, next) => {
  
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

router.route('/:id').get((req, res) => {
  Products.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/criteria/:criteria').get((req, res) => {
  Products.find({model :{ $regex: '.*' + req.params.criteria + '.*' }})
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id', upload.single('file'), (req, res, next) => {

  Products.findById(req.params.id)
    .then(products => {
      products.model = req.body.model;
      products.code = req.body.code;
      products.brand = req.body.brand;
      products.description = req.body.description;
      products.value = Number(req.body.value);
      products.size = req.body.size;
      products.stock = req.body.stock;
      products.style = req.body.style;
      products.date = Date.parse(req.body.date);
      products.image= "/"+req.file.originalname;
     
      products.save()
        .then(() => res.json('Product updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;