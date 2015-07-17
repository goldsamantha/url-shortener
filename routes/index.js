var express = require('express');
var router = express.Router();
var model = require('../model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Shortener' });
});

router.get('/save', function(req, res, next) {
  // Call model functionality here
  // might need to set up some callback functionality?
  var urlname = model.getShortenedURL(req.query.query);
  console.log("urlname: ", urlname);
  res.render('save', { title: 'Shortened', id: urlname, url: 'http://localhost:3000/c/'+urlname});
});


router.get('/c/:id', function(req, res) {
  // var expanded_url = model.getExpandedURL(req.params.id);
  // res.redirect('http://www.google.com');
  model.getExpandedURL(req.params.id, function(err, url){
    if (err) res.render('index', {title: '404'});
    res.redirect(url);
  });
});


module.exports = router;
