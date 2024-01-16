var http=require('http')
var express =require('express');
var app = express();
var fs = require('fs');

var body=require('body-parser')

var urlEncodded=body.urlencoded({extended:false})

app.use(express.static('public'))



var server = app.listen(9000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Start")
 })

 