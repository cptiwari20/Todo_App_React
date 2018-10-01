const mongoose = require('mongoose');
const Notes = mongoose.model('notes');
const requiresLogin = require('../middlewares/requiresLogin');

module.exports = app => {

  app.get('/api/notes', requiresLogin, async (req, res) => {
    const notes = await Notes.find({ _user: req.user });
    res.send(notes);
  });

  app.post('/api/notes', requiresLogin, async (req, res) => {
    const { title, body, category } = req.body; 
    try{
      const note = await new Notes({
        title,
        body,
        category,
        createdAt: Date.now(),
        _user: req.user
      })
      .save()
      res.send(note)
    }catch(err){
      res.status(403).send(err)
    }
  })
    

}