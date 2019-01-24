var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET users listing. */
router.post('/', function(req, res, next) {
    // res.send('inside addItem');
    console.log('posting the new todo list item');
   // var newTodo = { text: req.body.text };
    Todo.create({text: req.body.text}, function(err) {
        console.log("req body text", req.body);
        if (err) console.log(err);
    });

    res.send('successful post');

});

module.exports = router;


