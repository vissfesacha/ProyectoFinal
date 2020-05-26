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

router.route('/:id').get((req, res) => {
  Products.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.value = Number(req.body.value);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;