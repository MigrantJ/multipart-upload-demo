var   express = require('express'),
      multer = require('multer'),
      morgan = require('morgan'),
      http = require('http'),
      routes = require('./server/routes.js');
      app = express();

app.set('port', process.env.PORT || 8000);
app.set('root', __dirname);

app.use(express.static(app.get('root')));
app.use(morgan('combined'));
app.use(multer({
  dest: './server/uploads/'
}));

routes.initialize(app);

var server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log('Express is GO! Listening on port ' + app.get('port'));
});