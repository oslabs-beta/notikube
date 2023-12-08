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
    //.then(() => console.log('data rows', res.locals.tableData))
    .then(() => res.status(200).send(res.locals.tableData));
});

router.post('/updateAlerts', (req, res) => {
   // console.log('req body', req.body.alertid);
   // console.log('request body', req.body);
    console.log('another test');
    const { timestamp, description, priority, status, alertid } = req.body;
    req.body.id = timestamp;
    console.log('timestamp', timestamp, typeof(timestamp))
    const text = 'UPDATE testAlerts SET description=$1, priority=$2, status=$3 WHERE alertid=$4 ;';
    db.query(text, [description, priority, status, alertid])
      .then((data) => res.status(200).send(req.body));
});


module.exports = router;