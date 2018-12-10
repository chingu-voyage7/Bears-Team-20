import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
  const errors = {};
  const { password, email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = { id: user.id, name: user.name };
            jwt.sign(
              payload,
              keys.secretOrKey,
              (err, token) => {
                res.json({
                  success: true,
                  token: token,
                  id: user.id
                });
              }
            );
          }
          else {
            errors.password = 'Password incorrect';
            return res.status(400).json(errors);
          }
        })
    });
});

export default router;
