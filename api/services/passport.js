var passport = require('passport'),
  UserApp = require("userapp"),
  UserAppStrategy = require('passport-userapp').Strategy,
  users = [], appId = '53c13376ce73c';

//Initialize UserApp
UserApp.initialize({ appId:appId});

// Passport session setup
passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(function (username, done) {
  var user = null;
  users.forEach(function (userIn) {
    if (userIn.username == username)
      user = userIn;
  });

  if (user === undefined) {
    done(new Error('No user with username "' + username + '" found.'));
  } else {
    done(null, user);
  }
});

// Use the UserAppStrategy within Passport
passport.use(
  new UserAppStrategy(
    { appId: appId},
    function (userprofile, done) {
      process.nextTick(function () {
        var exists = false;

        users.forEach(function (user) {
          if (user.id == userprofile.id)
            exists = true;
        });

        if (!exists) {
          users.push(userprofile);
        }

        return done(null, userprofile);
      });
    }
  ));

module.exports = passport;
