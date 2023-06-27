const mysql=require("mysql");

const mysqlconnection=mysql.createConnection({

    "host":"127.0.0.1",
    "user":"root",
    "password":"root123",
    "database":"test",
    "port":3306

})
mysqlconnection.connect((err)=>{
    if(err)
    {
       console.log("connection is not established");
    }
    else {
        console.log("connection is established");
    }

})

module.exports=mysqlconnection;