var http=require('http') 
var express=require('express')
var app =express()
var myfs= require("fs")
var body=require('body-parser')
var urlEncoded=body.urlencoded({extended:false})
app.use(express.static("public"))

const path='product.json'
const products=require('./products.json')

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

//Request a product 
app.post('/requestProduct', urlEncoded,(req,res)=>
 { 
    
    const pname=req.body.pname
    const coll =req.body.coll
    const room=req.body.room
    const section=req.body.section
    res.json({message:"Product request submitted successfully"})

})
// Add a new product
app.post('/addProduct', urlEncoded,function(req,res)
 {  
  
    const newproduct=product4['product4']
    newproduct['pname']=req.body.pname
    newproduct['coll']=req.body.coll
    newproduct['room']=req.body.room
    newproduct['section']=req.body.section
       res.send(newproduct)
})


var server = app.listen(9000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Start")
 })


