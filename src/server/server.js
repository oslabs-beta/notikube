/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config();
const app = express();
const db = require('./model/model');
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const session = require('express-session')
const bcrypt = require('bcrypt')

app.use(cors());

app.use(cookieParser());

// enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use(express.json())


// Express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 10
    }
}))

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Passport config
require('./config/passport.js')(passport)

// passport.use(new LocalStrategy(async (username, password, done) => {
//     try {
//         console.log('username: ', username)
//         const findUserquery = 'SELECT * FROM users WHERE email=$1'
//         const result = await db.query(findUserquery, [username])
//         if (!result.rows[0]) {
//             console.log('User does not exist!')
//             return done(null, false)
//         }
//         await bcrypt.compare(password, result.rows[0].password, (err, isMatch) => {
//             if (err) {
//                 console.log('Bcrypt login error')
//                 return done(null, false)
//             }
//             else if (isMatch) {
//                 console.log('Username/Password is correct!')
//                 return done(null, { id: result.rows[0].userid, username: result.rows[0].email })
//             }
//             else {
//                 console.log('Password did not match')
//                 return done(null, false)
//             }
//         })
//     }
//     catch (err) {
//         console.log('Error verifying user: ', err)
//     }
// }));

// passport.serializeUser((userObj, done) => {
//     console.log('User serialized!')
//     console.log('userObj: ', userObj)
//     return done(null, userObj.id)

// });

// passport.deserializeUser((id, done) => {
//     console.log('User deserialized!')
//     console.log('Deserialize id: ', id)
//     return done(null, id)
// });



app.post('/api/auth/login', passport.authenticate('local', { failureMessage: 'User was not found' }), (req, res) => {
    console.log('Entered authRouter route')
    // req.session.user = req.user
    console.log('req.user: ', req.user)
    console.log('req.isAuthenticated: ', req.isAuthenticated())
    return res.status(200).json(req.user)
});

app.get('/api/auth/checkauth', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({
            user: true,
            name: req.user.name
        })
    }
    else {
        res.json({ user: false })
    }
})

app.get('/api/auth/logout', (req, res) => {
    req.logout(function (err) {
        if (err) {
            console.log('Logout Error: ', err)
            res.sendStatus(401)
        }
        else {
            res.sendStatus(200)
        }
    })
})

const authRouter = require('./routes/authRouter.js')

// app.use('/api/auth', authRouter);

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