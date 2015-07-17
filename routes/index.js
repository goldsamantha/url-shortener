var express = require('express');
var router = express.Router();
var model = require('../model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Shortener' });
});


/* GET the save page to save a new url to the hashtable */
router.get('/save', function(req, res, next) {
  var urlname = model.getShortenedURL(req.query.query);
  console.log("urlname: ", urlname);
  res.render('save', { title: 'Shortened', id: urlname, url: 'http://localhost:3000/c/'+urlname});
});


/* GET the converted url */
router.get('/c/:id', function(req, res) {
  model.getExpandedURL(req.params.id, function(err, url){
    if (err) res.render('index', {title: '404'});
    res.redirect(url);
  });
});


module.exports = router;
