var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./schema');

exports.getData = function(req, res){
         User.find({}, function(err, user){
            if(err) throw err;
            res.json(user);
         });
    }

exports.getDataById=function(req, res){
         var temp =req.params.idstud; 
         User.find({idstud:temp}, function(err, user){ 
            if(err) throw err;
            res.json(user);
         });
     }


exports.getDataByYear=function(req, res){
    var year=req.params.yearstud;
    User.find({year: year}).where('grade').gt(89).exec(function(err,user){
            if(err) throw err;
            res.json(user);
        });
    }
