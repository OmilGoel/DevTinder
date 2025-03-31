const express = require("express");

const app = express();  

// app.use("/",(req,res)=>{
//     res.send("Pheli baar");
// });

app.get("/user",(req,res)=>{
    res.send({firstname:"Omil",lastname:"Goel"});
})
app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstname:"Omil",lastname:"Goel"});
})
app.post("/user",(req,res)=>{
    // saving data to the database 
    res.send("data saved successfully !!");
})

app.use("/test",(req,res)=>{
    res.send("This is testing page...");
});

app.use("/hello",(req,res)=>{
    res.send("Hello everyone");
});

app.listen(7777,()=>{
    console.log("Running on port 7777");
});   