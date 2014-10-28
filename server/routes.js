module.exports.initialize = function(app) {
  app.get('*', function(req, res) {
    res.sendFile(app.get('root') + '/client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

  app.post('/upload', function (req, res) {
    console.log('req.files is ' + JSON.stringify(req.files));
  });
};