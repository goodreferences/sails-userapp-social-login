/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var UserApp = require("userapp"),
UserAppStrategy = require('passport-userapp').Strategy;


module.exports = {

  signup: function(req, res){

    var user = req.body;

    // Create the user in UserApp
    UserApp.User.save(user, function(err, user) {
      // We can just pass through messages like "Password must be at least 5 characters." etc.
      if (err) return res.render('signup', {user: false, message: err.message});

      // UserApp passport needs a username parameter
      req.body.username = req.body.login;

      // On to authentication
      passport.authenticate('userapp', {  successRedirect: '/', failureRedirect: '/signup', failureFlash: 'Error logging in user' })

    });

  },


  login: function (req, res) {
    console.log('login...');
    res.view();
  },

  sigin: function(req, res){
    console.log('sigin...');
    passport.authenticate('userapp',function(err, user, info) {
      console.log('indo...');
      if ((err) || (!user)) {
        return res.send({
          message: 'login failed'
        });
        res.send(err);
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
        return res.send({
          message: 'login successful'
        });
      });
    })(req, res);
  }

};

