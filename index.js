const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const tempPort = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.send("Hello world");
})

app.listen(tempPort, ()=>{
    console.log("Being hosted at http://localhost:"+tempPort);
})