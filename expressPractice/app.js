const express=require("express")
const app=express()
const path=require("path")
const routes=require("./router1/router")
const bodyparser=require("body-parser")



app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use("/",routes);

app.listen(3002,function(){

    console.log("server started on port 3002");
})

module.exports=app;