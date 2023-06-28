const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")


router.get("/employees",(req,resp)=>{

    connection.query("select * from employee",(err,data,fields)=>
    {
        if(err)
        {
            resp.status(500).send("cannot et details"+  JSON.stringify());
        }
        else{
            resp.send(data);
        }
    })
})

router.get("/getemp/:empid",function(req,resp){

    connection.query("select * from employee where empid= ? ",[req.params.empid],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("invalid empid"+  JSON.stringify());
        }
        else{
            resp.send(data);
        }
    })
})

router.put("/update/:empid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("update employee set ename=? , sal=? where empid=?",[ename,sal,empid],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("cannot update"+  JSON.stringify());
        }
        else{
            resp.send(data);
        }
    })
})

router.get("/delete/:empid",function(req,resp){
      connection.query("delete from employee where empid=?",[req.params.empid],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("cannot delete"+  JSON.stringify());
        }
        else{
            resp.send("/employees");
        }

      })
})


module.exports=router;
