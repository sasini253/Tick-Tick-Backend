var express = require("express");
var app = express();
//var cors = require("cors")

app.use(express.json());
//app.use(cors());

    app.get("/",function(req,res){
        res.send("hello");
    })


    app.listen(3001,function (){
  console.log("listen to the port 3001")  
});