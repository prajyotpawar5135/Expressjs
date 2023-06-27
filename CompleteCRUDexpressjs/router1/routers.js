const express=require("express")
const router=express.Router();
const connection=require("../db/dbConnect");

router.get("/employees",function(req,resp){

    connection.query("select * from employee",(err,data,fields)=>{
            if(err)
            {
                resp.status(500).send("data not found"+JSON.stringify())
            }
            else{
                resp.render("index",{empdata:data})//{}bcoz data json madhe ahe 
            }
    })
})

router.get("/addemp",function(req,resp){
     resp.render("add-emp");

})
router.post("/insertemp",function(req,resp){

    var empid=(req.body.empid);
    var ename=(req.body.ename);
    var sal=(req.body.sal);
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
 
        if(err)
        {
            resp.status(500).send("employees not inserted"+JSON.stringify())
        }
        else{
            resp.redirect("/employees")
        }
    })
})

router.get("/getemp/:empid",function(req,resp){

    connection.query("select * from employee where empid=?",[req.params.empid],(err,data,fields)=>{

        if(err)
        {
            resp.status(500).send("invalid employee id "+JSON.stringify())
        }
        else{
            resp.send(data);
        }
    })
})

router.post("/updateemp/:empid",function(req,resp){
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal
    connection.query("update employee set ename=?, sal=? where empid=?",[ename,sal,empid],(err,data,fields)=>{

       
        if(err)
        {
            resp.status(500).send("invalid employee id "+JSON.stringify())
        }
        else{
            resp.send(data);
        }
    })
})

router.get("/deleteemp/:empid",function(req,resp){
     connection.query("delete from employee where empid=?",[req.params.empid],(err,result)=>{
        if(err)
        {
            resp.status(500).send("invalid employee id "+JSON.stringify())
        }
        else{
            resp.redirect("/employees");
        }
     })
})

module.exports=router;
