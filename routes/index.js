var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Shortener' });
});

router.get('/:id', function(req, res, next) {
  res.render('save', { title: 'Shortened' });
});


module.exports = router;
