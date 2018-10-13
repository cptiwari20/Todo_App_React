const mongoose = require('mongoose');
const Notes = mongoose.model('notes');
const requiresLogin = require('../middlewares/requiresLogin');


module.exports = app => {
  app.delete('/api/notes/:id', requiresLogin, async (req, res) => {
    const note = await Notes.findByIdAndRemove(req.params.id)
    res.send(note)
  });
  app.put('/api/notes/edit/:id', requiresLogin, async (req, res) => {
    const { title, body, category } = req.body;
    const note = await Notes.findByIdAndUpdate(req.params.id, {
      $set: {
          title, 
          body,
          category
        }
        })
      res.send(note);
  })
  app.get('/api/notes/:id', requiresLogin, async (req, res) => {
    const note = await Notes.findOne({
      _user: req.user._id,
      _id: req.params.id
    })
    res.send(note)
  })

  app.get('/api/notes', requiresLogin, async (req, res) => {
    const notes = await Notes.find({ _user: req.user });
    res.send(notes);
  });

  app.post('/api/notes', requiresLogin, async (req, res) => {
    const { title, body, category, image } = req.body; 
    try{
      const note = await new Notes({
        title,
        body,
        category,
        image,
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