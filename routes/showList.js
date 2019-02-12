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

        var doneItems = [];
        var todoItems = [];
        for (i = 0; i < todos.length; i++) {
            if (todos[i].done) {
                doneItems.push({"_id": todos[i]._id, "text": todos[i].text});
            } else {
                todoItems.push({"_id": todos[i]._id, "text": todos[i].text});
            }
        }

        res.send([todoItems, doneItems]);
    });

});

module.exports = router;
