module.exports.index = function(req, res, next) {
  res.render('index');
}

module.exports.papers = function(req, res, next) {
  res.render('papers');
}