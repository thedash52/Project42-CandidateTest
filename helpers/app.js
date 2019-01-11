const express = require('express');

const app = express();

app.use(express.static('views'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/angularjs', function(req, res) {
    res.render('AngularJS/index');
});

app.get('/angular7', function(req, res) {
    res.render('Angular7/index');
});

module.exports = app;
