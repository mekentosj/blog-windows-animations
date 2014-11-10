var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');

function setPage(page) {
  return function(req, res, next) {
    res.locals.page = page;
    next();
  };
}


app.set('env', process.env.NODE_ENV || 'development');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/windows', setPage('windows'), routes.windows);
app.get('/mac', setPage('mac'), routes.mac);
app.get('/ios', setPage('ios'), routes.ios);
app.get('/online', setPage('online'), routes.online);

module.exports = app;