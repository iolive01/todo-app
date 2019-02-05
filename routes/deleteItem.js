var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET users listing. */
router.delete('/', function(req, res) {

    //right now it is in req.query, but might change to a diff place
    console.log("request : ", req.query._id);

    Todo.deleteOne({_id : req.query._id}, function(err) {

        // console.log("req body text", req.body.text);
        if (err) console.log(err);

        // res.send('deleted');
        Todo.find(function (err, todos) {
            if (err) {
                console.log(err);
            }

            var parsedData = [];

            for (i = 0; i < todos.length; i++) {
                parsedData[i] = {"_id": todos[i]._id, "text": todos[i].text}
            }

            console.log('PARSED FROM FIND parsedData');
            res.send(parsedData);
        });

    });










});

module.exports = router;
