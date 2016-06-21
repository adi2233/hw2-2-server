var express = require('express');
var app = express();
var student=require('./student');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds023418.mlab.com:23418/students');

var port = process.env.PORT || 3000;

//open connection to mongoDB
mongoose.connection.once('open', function(){
    app.use('/', express.static('./public'));
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.set('json spaces', 4);
    res.set("Content-Type", "application/json");
      next();
    });
    app.get('/students',student.getData);
    app.get('/studentsById/:idstud',student.getDataById);
    app.get('/studentsByYear/:yearstud',student.getDataByYear);
});

app.listen(port);
















