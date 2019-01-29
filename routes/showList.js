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

        var parsedData = [];
        for (i = 0; i < todos.length; i++) {
            parsedData[i] = {"_id": todos[i]._id, "text": todos[i].text}
        }

        console.log(parsedData);
        // console.log(todos[0].text);
        // console.log(todos[0]._id);
        // console.log(todos[0]);
        // console.log(todos.length);
        res.send(parsedData);
    });

});

module.exports = router;
