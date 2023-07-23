const mysql=require("mysql")

var  mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"root123",
    "database":"test",
    "port":3306
})

mysqlconnection.connect((err)=>{

    if(err)
    {
        console.log("conection failed")
    }
    else{
        console.log("connection established")
    }
})

module.exports=mysqlconnection