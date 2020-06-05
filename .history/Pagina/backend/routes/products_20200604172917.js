const router = require('express').Router();
let Products = require('../models/products.model.js');
const multer= require('multer');
const checkAuth= require('../middleware/checkauth');

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
  
  const username = req.body.username;
  const description = req.body.description;
  const value = Number(req.body.value);
  const date = Date.parse(req.body.date);
  const image = req.file.path;

  const newExercise = new Products({
    username,
    description,
    value,
    date,
    image
  });

  newExercise.save()
  .then(() => res.json('Product added'))
  .catch(err => res.status(400).json('Error: ' + err));
});


 
  router.get('/product:id', async (req, res) => {
   const product= await Products.findById(req.params.id)
  console.log(product);
   //const tasks= await hoteles.find();
   //res.render('index', {
   //tasks
   //});
   });
   


router.route('/:id').get((req, res) => {
  Products.findById(req.params.id)
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
      products.username = req.body.username;
      products.description = req.body.description;
      products.value = Number(req.body.value);
      products.date = Date.parse(req.body.date);
      products.image= req.file.path;
      products.save()
        .then(() => res.json('Product updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;