const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../model/model.js')
const bcrypt = require('bcrypt')
const SALT_FACTOR = 10

module.exports = function () {
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      console.log('username: ', username)
      const findUserquery = 'SELECT * FROM users WHERE email=$1'
      const result = await db.query(findUserquery, [username])
      if (!result.rows[0]) {
        console.log('User does not exist!')
        return done(null, false)
      }
      await bcrypt.compare(password, result.rows[0].password, (err, isMatch) => {
        if (err) {
          console.log('Bcrypt login error')
          return done(null, false)
        }
        else if (isMatch) {
          console.log('Username/Password is correct!')
          return done(null, { id: result.rows[0].userid, username: result.rows[0].email, name: result.rows[0].name })
        }
        else {
          console.log('Password did not match')
          return done(null, false)
        }
      })
    }
    catch (err) {
      console.log('Error verifying user: ', err)
    }
  }));

  passport.serializeUser((userObj, done) => {
    console.log('User serialized!')
    console.log('userObj: ', userObj)
    return done(null, userObj)
  })

  passport.deserializeUser((userObj, done) => {
    console.log('User deserialized!')
    console.log('Deserialized username: ', userObj.username)
    return done(null, userObj)
  })
}
