const express= require("express");
var router=express.Router();

var Connection=require("../db/dbconnect");
// const { render } = require("../../expresscrudmysqldemo/app");
console.log("in router")
router.get("/employees",function(req,resp){
    console.log("in employees")
   Connection.query("select * from employee",function(err,data,fields){
        if(err)
        {
            resp.status(500).send("no data found",JSON.stringify(err));
        }
        else{
            resp.render("index",{empdata:data});
            // resp.send(data);
        }

   })

})
router.get("/displayaddform",(req,resp)=>{

    resp.render("add-emp");
})

router.post("/data90",function(req,resp){
    console.log("in data90")
    console.log((req.body))
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;                                 //vreates array
    Connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }
        else{              
            console.log("returning from data90")     //pathname la parat pathvl
            resp.redirect("/employees")
        }
    })
    })
module.exports=router;