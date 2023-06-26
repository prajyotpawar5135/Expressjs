const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect");

router.get("/employees",function(req,resp)
{
   connection.query("select * from employee",(err,data,fields)=>{
    if(err)
    {
        resp.status(500).send("no data found"+JSON.stringify(err));
    }
    else{
        resp.render("index",{empdata:data})
    }

   })
})
router.get("/displayaddform",(req,resp)=>
{
    resp.render("add-emp")
})

router.post("/insertemployee",(req,resp)=>{

    var empid=(req.body.empid);
    var ename=(req.body.ename);
    var sal=(req.body.sal);

    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        if(err)
        {
            resp.status(500).send("employee not inserted"+JSON.stringify(err));
        }
        else
        {
            resp.redirect("/employees")
        }
    })
})
module.exports=router;