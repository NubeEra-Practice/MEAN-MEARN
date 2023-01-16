//npm install express --save
const express = require("express")

const app =express()  //initialize App
const port=3000

//CallBack Function
app.get("/",(req,res)=> {
    res.send("I am From Express.js")
})

app.listen(port,()=>{
    console.log("Server Started")
})