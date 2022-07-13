const express = require('express')
const app = express()
const port = 3000
const host = 'http://localhost'
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {root: __dirname})
})
app.get('/about', (req, res)=>{
    res.sendFile('./about.html', {root: __dirname})
})
app.get('/contact', (req, res)=>{
    res.sendFile('./contact.html', {root: __dirname})
})
app.get('/drinks/:minuman', (req, res)=>{
    res.send(
        'Minuman = ' + req.params.minuman
        )
})
app.get('/drinks', (req, res)=>{
    res.send(
        'Minuman = ' + req.query.drink +
        '<br><br>' +
        'Keterangan = ' + req.query.description
        )
})
app.post('/drinks', urlencodedParser, (req, res)=>{
    res.send(
        'Minuman = ' + req.body.drink +
        '<br><br>' +
        'Keterangan = ' + req.body.description
        )
})
app.use('/', (req, res)=>{
    res.status(404)
    res.sendFile('./error.html', {root: __dirname})
})
app.listen(port, ()=> {
    console.log(`App listen on :${port}`);
})