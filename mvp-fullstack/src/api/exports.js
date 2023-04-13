module.exports = (app) => {
    app.use('/', require('./app.js'));
    app.use('/', require('./api.js'));
  };