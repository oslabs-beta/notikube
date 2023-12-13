const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController.js');


router.post('/signup', authController.createUser, (req, res) => {
  console.log('authRouter step');
  res.json({ newUser: true });
});

router.post('/login', passport.authenticate('local', { failureMessage: 'User was not found' }), (req, res) => {
  console.log('Entered authRouter route');
  // req.session.user = req.user
  console.log('req.user: ', req.user);
  console.log('req.isAuthenticated: ', req.isAuthenticated());
  return res.status(200).json(req.user);
});

router.get('/checkauth', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      user: true,
      name: req.user.name
    });
  }
  else {
    res.json({ user: false });
  }
});

router.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log('Logout Error: ', err);
      res.sendStatus(401);
    }
    else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
