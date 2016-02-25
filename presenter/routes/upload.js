var express = require('express');
var app = express();

exports.get('/profile', function(req, res, next) {
    console.log(req.files);
});

module.exports = router;
