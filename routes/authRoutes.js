const passport = require('passport')
module.exports = app => {
  app.get('/', (req, res) => res.send('<h1>Home Page</h1>'))

  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login'
  }), (req, res) => {
    res.redirect('/')
  });

  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}