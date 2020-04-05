const express = require("express");
let app = new express();

app.get("/", (req,res)=>{
    res.send("hello, from node example");
});

app.get("/about", (req, res)=>{
    res.send("About this web App");
});

app.get("/contact", (req, res)=>{
    res.send("contact us at the address below");
});

// listen to the server!!!!!
let port = 5000
app.listen(5000, ()=>{
    console.log("Server is listening to: " + "port " + port);
});