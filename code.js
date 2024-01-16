var http=require('http')
var express =require('express');
var app = express();
var fs = require('fs');

var body=require('body-parser')

var urlEncodded=body.urlencoded({extended:false})

app.use(express.static('public'))

var product4={"product 4":{
    "name":"Glass Straw",
    "collection":"Straws",
    "room":"kitchen",
    "section":"Home",
    "product_id":"4"
}}

// Retrieve the main page -> Get 
app.get('/',function(req,res)
{
res.sendFile(__dirname+'/public/main.html')
})

// Retrieve the form page -> Get 
app.get('/form',function(req,res)
{
res.sendFile(__dirname+'/public/form.html')
})

// Get All products -> Get
app.get('/products',function(req,res)
{
    res.json(products)

})

var server = app.listen(9000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Start")
 })


