const arya = require('express')

const app=arya();

//routes
app.get("/",(req,res)=>{
    res.send("hellllo worldd")
});

app.listen(3000,()=>{
    console.log("server is running on port 3000")
});