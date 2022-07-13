const express = require('express')
const app = express()
const port = 3000
const host = 'http://localhost'

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {root: __dirname})
})
app.get('/about', (req, res)=>{
    res.sendFile('./about.html', {root: __dirname})
})
app.get('/contact', (req, res)=>{
    res.sendFile('./contact.html', {root: __dirname})
})
app.get('/products/:id', (req, res)=>{
    res.send(
        'product id = ' + req.params.id +
        '<br><br>' +
        'category id = ' + req.query.category
        )
})
app.use('/', (req, res)=>{
    res.status(404)
    res.sendFile('./error.html', {root: __dirname})
})
app.listen(port, ()=> {
    console.log(`App listen on :${port}`);
})