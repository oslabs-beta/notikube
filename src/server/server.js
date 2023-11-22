const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const db = require('./model/model');

// enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => res.send('hello'));

app.get('/api/dbTest', (req, res) => {
  const text = "INSERT INTO users (name, email) VALUES ('test', 'test@gmail.com');"

  db.query(text);

  res.sendStatus(200);
})

app.use('*', (req, res) => {
    res.status(404).send('Not Found');
})

//Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'unknown error handler caught in middleware',
        status: 400,
        message: { err: 'An error occured' },
    }
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).send(errorObj.message);
})

app.listen(3000, () => console.log('App listening on port 3000'));

module.exports = app;