//import library
const express=require("express");
const app=express();
const path=require("path")
const bodyparser=require("body-parser");
const router=require('./router/routers.js')
//add middlewares
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
// configure the application
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")));

// app.use("/css",express.static(path.resolve(__dirname,"public/css")))
// app.use("/js",express.static(path.resolve(__dirname,"public/js")))
// app.use("/image",express.static(path.resolve(__dirname,"public/images")))
//add url handler
app.use("/",router);

//start the server
app.listen(3002,function(){
    console.log("server running at port 3002")
})
module.exports=app;