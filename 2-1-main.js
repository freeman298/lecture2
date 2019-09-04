module.exports =  (app)=> {
    app.get('/data/',()=>{
        resizeBy.render('index.html')
    })
    app.get('/user',()=>{
resizeBy.render('more.html')
    })
}