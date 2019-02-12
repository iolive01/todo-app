var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET users listing. */
router.delete('/', function(req, res) {

    //right now it is in req.query, but might change to a diff place

    Todo.updateMany({done: false}, {done: true}, function(err) {

        // console.log("req body text", req.body.text);
        if (err) console.log(err);

        Todo.find(function (err, todos) {
            if (err) {
                console.log(err);
            }
            console.log('TODOS:', todos);
            var doneItems = [];
            var todoItems = [];
            console.log('todo items before:', todoItems)
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
