const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const userSchema = new Schema({
  name: String,
  googleId: String
});

mongoose.model('users', userSchema);