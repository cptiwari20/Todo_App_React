const express = require('express');
const app = express();

//Routes
require('./routes/authRoutes')(app);

const Port = process.env.PORT || 5000;
app.listen(Port, (err) => {
  if (err) {
    return res.status(400).send('ERROR!!:', err)
  }
  console.log('Server has been started on port:', Port)
});