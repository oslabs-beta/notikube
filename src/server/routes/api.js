const express = require('express');
const db = require('../model/model.js');
const router = express.Router();
require('dotenv').config();
router.use(express.urlencoded({ extended: true }));

router.get('/currentConfig', (req, res) => {
    
  const text = "SELECT * FROM configurations WHERE userID=$1;";
  const userID = process.env.userID;
  let currentConfig = {};
  db.query(text, [userID])
    .then((data) => currentConfig = data.rows[0])
    .then(() => {
      res.status(200).json(currentConfig)
      return
    })

  })

router.post('/notificationUpdate', (req, res) => {

  let { memory, cpu, email, phone } = req.body;
  const userID = process.env.userID;

  if (email) {
    email='true'
  } else {
    email='false'
  }
  if (phone) {
    phone='true'
  } else {
    phone='false'
  }

  const text = 'UPDATE configurations SET memory=$1, cpu=$2, email=$3, phone=$4 WHERE userID=$5;';
  db.query(text, [memory, cpu, email, phone, userID])
    
    res.redirect('/notifications');

})

router.get('/tableData', (req, res) => {

  const userid = process.env.userID
  const text = 'SELECT * FROM testAlerts WHERE userid =$1'
  db.query(text, [userid])
    .then((data) => res.locals.tableData = data.rows)
    .then(() => console.log('data rows', res.locals.tableData))
    .then(() => res.status(200).send(res.locals.tableData))
})


module.exports = router;