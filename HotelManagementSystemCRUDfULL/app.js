const express=require("express")
const app=express();
const routes=require("./router/router")
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())

app.use("/",routes)

app.listen(3002,function(){
    console.log("server estalisheed on port 3002")
})



