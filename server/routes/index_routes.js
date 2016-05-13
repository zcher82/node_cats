var express = require('express');
var router = express.Router();
var path = require('path');
var cats = ['Kris', 'Luna', 'Rubio']; //defined var cats array comes before routers because it will be used by routers

router.get('/', function(req, res) {
  res.send(cats);
});

router.post('/', function(req, res) {
  cats.push(req.body.catName);
  res.send(true);
});



module.exports = router;  //export router because that's the only thing being used from this module
