const express = require("express");

const app=express();
// app.use("/",(req,res)=>{
//     res.send("Hello from the server!");
// });

app.use("/hello",(req,res)=>{
    res.send("Hello Yashh here!"); 
})


app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});