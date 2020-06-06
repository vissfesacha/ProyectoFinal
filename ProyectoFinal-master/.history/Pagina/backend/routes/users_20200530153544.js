
const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser.save()
    .then(() => res.json('User added'))
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
        password: hash

      });
      user.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  });

});
router.post('/login', (req, res) => {
  User.find({ username: req.body.username })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
        if (result) {
         const token= jwt.sign({
            username: user[0].username,
            userId: user[0]._id
          },"Secretin",
          {
            expiresIn:"1h"
          }
          );
          
          return res.send(token);
        //  return res.status(200).json({
       //     message: 'Authentication successfull',
      //      token:token
       //   });
        }
        res.status(200).json({
          message: 'Authentication failed'
        });
      });
    })
    .catch(err => res.status(400).json('Error: ' + err));


});

router.post('/getUser', (req, res) => {


});

module.exports = router;