var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var indexModel = require('../models/indexModel.js');

router.get('/', function(req, res, next) {
  indexModel.find().lean().exec(function (err, values) {
    if (err) return next(err);
    // console.log(JSON.stringify(values));
    console.log(values);
    return res.render('index', { title: 'Express',
                      'ttw_data': values});
  });
});

module.exports = router;
