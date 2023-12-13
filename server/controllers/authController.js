const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;
const db = require('../model/model.js');

const authController = {};

authController.createUser = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  const findUser = 'SELECT * FROM users WHERE email=$1';
  const result = await db.query(findUser, [email]);

  if (!result.rows[0]) {
    const addUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
    bcrypt.hash(password, SALT_FACTOR, async (err, hash) => {
      if (err) {
        return next({
          log: `authController.createUser bcrypt hash error: ${err}`,
          message: {
            err: 'Error in authController.createUser. Check server logs'
          }
        });
      }
      try {
        await db.query(addUser, [fullName, email, hash]);
        console.log('User created!');
        return next();
      }
      catch (err) {
        return next({
          log: `authController.createUser add user to db error: ${err}`,
          message: 'Error in authController.createUser. Check server logs'
        });
      }
    });
  }
  else {
    console.log('User already exists!');
    return res.json({ newUser: false });
  }
};

module.exports = authController;