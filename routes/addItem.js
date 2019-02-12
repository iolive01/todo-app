var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log('posting the new todo list item');
    Todo.create({text: req.body.text, done: false}, function(err) {
        // console.log("req body text", req.body.text);
        if (err) console.log(err);

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

});

module.exports = router;


