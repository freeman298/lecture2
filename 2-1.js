var express = require('express');
var app = express();

app.listen(3000,()=>{
    console.log("웹서버가 실행되었다. http://127.0.0.1:3000")
})

app.get('/',(req,res)=>{
    res.send("안녕 서초")
})