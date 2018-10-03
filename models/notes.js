const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  body: String,
  createdAt: Date,
  image: String,
  category: String,
  _user: { type: Schema.Types.ObjectId, ref: 'users'}
})

mongoose.model('notes', noteSchema);