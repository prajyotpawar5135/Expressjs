const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/hotels",function(req,resp){

   connection.query("select * from hotels",(err,data,fields)=>{

    if(err)
    {
        resp.status(500).send("unable to find hotels"+JSON.stringify())
    }
    else{
        resp.send(data);
    }
   })
     
})

router.post("/hotels/:id",function(req,resp){
    var id=req.body.id;
    var name =req.body.name;
    var hprice=req.body.hprice;
    
    connection.query("insert into hotels values(?,?,?)",[id,name,hprice],(err,data,fields)=>{

        if(err)
        {
            resp.status(500).send("values not inserted"+JSON.stringify(err))
        }
        else{
            resp.send(data);
        }
    })
})

router.put("/hotels/:id",function(req,resp){

    connection.query("update hotels set name=? ,hprice=? where id=?",[req.body.name,req.body.hprice,req.params.id],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("values not updated"+JSON.stringify(err))
        }
        else{
            resp.send(data);
        }
    })
})

router.delete("/hotels/:id",function(req,resp){

    connection.query("delete from hotels where id=?",[req.params.id],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("values not deleted"+JSON.stringify(err))
        }
        else{
            resp.send(data);
        }

    })
})

router.get("/hotels/:name",function(req,resp){

    connection.query("select * from hotels where name=?",[req.params.name],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("invalid ename"+JSON.stringify(err))
        }
        else{
            resp.send(data);
        }

    })

})

router.put("/hotels/easy/:name",function(req,resp){

    connection.query("update hotels set hprice=? where name=?",[req.body.hprice,req.params.name],(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("invalid ename"+JSON.stringify(err))
        }
        else{
            resp.send(data);
        }

    })
    
})









module.exports=router;


