var express = require('express');
var app = express();
var router = require('./2-1-main')(app);

app.set('views', __dirname+'/views'); //VIEWS폴더 지정
app.set('view engine','ejs'); //자바스크립트를 구동하는 엔진 설정
app.engine('html',require('ejs').renderFile);

app.listen(3000,()=>{
    console.log("웹서버가 실행되었다. http://127.0.0.1:3000")
});

app.get('/',(req,res)=>{
    res.send("안녕 서초")
});