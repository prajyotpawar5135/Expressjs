const { json } = require("body-parser");
const mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"root123",
    "database":"test",
    "port":3306

});
mysqlconnection.connect((err)=>{
    if(err)
    {
        console.log("connection is not established"+JSON.stringify(err))
    }
    else{
        console.log("connection established successfully");
    }

})
module.exports=mysqlconnection;