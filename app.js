const express = require('express');
const body_parser = require('body-parser');
items =[]
const app = express()
app.use (body_parser.urlencoded({extended : true}))
app.use(express.static("public"))
app.set('view engine' , 'ejs')
app.get("/", function(req,res){
   var today = new Date();
   var options ={
     weekday:'long',
     year : 'numeric',
     month :'long',
     day : 'numeric'
   };
   var day =today.toLocaleDateString("en-US" ,options);
   res.render("list" , {kindOfDay : day , newitems : items});
})
app.post("/", function(req,res){
   item = req.body.item
   items.push(item)
   res.redirect("/")
})
app.listen(3000,function(){
  console.log("server started at port 3000");
})
