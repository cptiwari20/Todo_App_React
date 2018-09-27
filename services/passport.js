const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id)
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE_CLIENT_ID,
  clientSecret: keys.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({
    googleId: profile.id
  });

  if (existingUser) {
    return done(null, existingUser);
  };

  const user = await new User({
    googleId: profile.id,
    name: profile.displayName,
    image: profile._json.image.url,
    email: profile.emails[0].value
  }).save();
  done(null, user)
}))