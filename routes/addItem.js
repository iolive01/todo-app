var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    // res.send('inside addItem');
    console.log('posting the new todo list item');

});

module.exports = router;

