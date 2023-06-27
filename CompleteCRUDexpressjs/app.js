const express=require("express")
const app=express();
const path=require("path");
const bodyparser=require("body-parser");
const routes=require("./router1/routers");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

app.set(express.static(path.join(__dirname,"public")))

app.use("/",routes)

app.listen(3002,function(){
    console.log("server started on port 3002")
})

module.exports=app;