const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../controllers/authController.js')

router.post('/signup', authController.createUser, (req, res) => {
  console.log('authRouter step')
  res.json({ newUser: true })
})

module.exports = router;
