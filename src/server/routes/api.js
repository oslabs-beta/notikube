const express = require('express');
const db = require('../model/model.js');
const router = express.Router();
require('dotenv').config();
router.use(express.urlencoded({ extended: true }));


router.get('/tableData', (req, res) => {

  const userid = process.env.userID;
  const text = 'SELECT * FROM testAlerts WHERE userid =$1';
  db.query(text, [userid])
    .then((data) => res.locals.tableData = data.rows)
    .then(() => console.log('data rows', res.locals.tableData))
    .then(() => res.status(200).send(res.locals.tableData));
});

router.post('/alert', (req, res) => {
  console.log('req.body', req.body);
  res.sendStatus(200);
})


module.exports = router;