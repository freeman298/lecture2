var express = require('express');
var app = express();
var router = require('./2-1-main')(app);

app.set('views', _dirname+'/views');
app.set('view engine','ejs');

app.listen(3000,()=>{
    console.log("웹서버가 실행되었다. http://127.0.0.1:3000")
});

app.get('/',(req,res)=>{
    res.send("안녕 서초")
});