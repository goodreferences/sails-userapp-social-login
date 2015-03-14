/**
 * Created by icastilho on 09/03/15.
 */

module.exports = {
  express: {
    customMiddleware: function (app) {
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};
