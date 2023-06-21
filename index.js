const express=require("express");
const bodyparser=require("body-parser");
const path = require('path');
const app=express()
app.set('view engine', 'ejs');
var items=[];
var work=[];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    const wholedate=new Date();
    const options = { month: 'short', weekday: 'long',  };
const date = wholedate.toLocaleString('en-US', options);
    res.render("list",{date:date ,tasks:items})
})
app.post("/",function(req,res){

  const item=req.body.task;
  if(req.body.list==="work"){
    work.push(item)
    res.redirect("/work")
  }
  else{
    items.push(item)
    res.redirect("/")
  }
  
  
})

app.get("/work",function(req,res){
    
    res.render("list",{date:"work list" ,tasks:work})

})

app.listen(3000,function(){
    console.log("listenning")
})