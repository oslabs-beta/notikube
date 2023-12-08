const express = require('express');
const db = require('../model/model.js');
const router = express.Router();
require('dotenv').config();
router.use(express.urlencoded({ extended: true }));


router.get('/tableData', (req, res) => {

  const userid = process.env.userID
  const text = 'SELECT * FROM testAlerts WHERE userid =$1'
  db.query(text, [userid])
    .then((data) => res.locals.tableData = data.rows)
    .then(() => console.log('data rows', res.locals.tableData))
    .then(() => res.status(200).send(res.locals.tableData))
})

router.post('/alert', (req, res) => {
  console.log('Incoming Alert: ', req.body);
  const alertName = req.body.alerts[0].labels.alertname;
  const description = req.body.alerts[0].annotations.description;
  const priority = req.body.alerts[0].labels.severity;
  const userid = process.env.userID;
  const text = 'INSERT INTO testalerts (type, description, priority, status, userid) VALUES ($1, $2, $3, $4, $5);';
  db.query(text, [alertName, description, priority, 'Open', userid])
    .then((data) => console.log('alert added to table'))
    .catch((err) => console.log(`Error adding alert to table: ${err}`));
  res.sendStatus(200);
})


module.exports = router;