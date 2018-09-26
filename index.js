const express = require('express');
const app = express();
const mongoose = require('mongoose');

const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
}, (err) => {
  if (err) {
    console.log("DB Connection Error:", err)
  }
  console.log('connected to db');
});

//Routes
require('./routes/authRoutes')(app);

const Port = process.env.PORT || 5000;
app.listen(Port, (err) => {
  if (err) {
    return res.status(400).send('ERROR!!:', err)
  }
  console.log('Server has been started on port:', Port)
});