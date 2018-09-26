const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session')

const keys = require('./config/keys')

require('./models/users')
require('./services/passport');

mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true
}, (err) => {
  if (err) {
    console.log("DB Connection Error:", err)
  }
  console.log('connected to db');
});

//middlewares 
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.COOKIE_KEY]
}))
app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./routes/authRoutes')(app);

const Port = process.env.PORT || 5000;
app.listen(Port, (err) => {
  if (err) {
    return res.status(400).send('ERROR!!:', err)
  }
  console.log('Server has been started on port:', Port)
});