import express from 'express';
import bcrypt from 'bcryptjs';

const keys = require('../configuration/keys');
const router = express.Router();

const User = require('../models/User');
// @route /api/user
// Test route
router.get('/test', (req, res) => {
  res.json({ msg: 'Route /api/user is working' });
});

router.get('/', (req, res) => {
  User.find()
    .select('-password')
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
});

router.post('/register', (req, res) => {
  // Validate input first
  // Check all required fields are present
  User.find({ email: req.body.email })
    .then((result) => {
      if (result.length === 0) {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch((err) => {
                console.log(err);
                res.json(err);
                // res.json({ msg: 'Error in creating user'});
              });
          })
        })
      };
    });
});

router.post('/login', (req, res) => {
  res.json({ msg: 'login user' });
});

export default router;
