const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy; 
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id)
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})


//google
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
}));

//facebook
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID,
    clientSecret: keys.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({
      facebookId: profile.id
    });
  
    if (existingUser) {
      return done(null, existingUser);
    };
  
    const user = await new User({
      facebookId: profile.id,
      name: profile.displayName,
      image: 'https://graph.facebook.com/' + profile.id + '/picture?type=large',
      email: profile._json.email
    }).save();
    done(null, user)
  }
));