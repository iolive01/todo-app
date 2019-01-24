var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

// Show the list of the users
router.get('/', function(req, res) {

    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        }
        res.send(todos);
    });

});

module.exports = router;
