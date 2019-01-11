const express = require('express');

const app = express();

app.use(express.static('views'));

app.get('/', function(req, res) {
    res.render('index');
});

module.exports = app;
