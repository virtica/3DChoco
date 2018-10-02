const express = require('express')
const app = express()
const port = 3000


// Folder for view files
app.set('views' , './views')
//Templating engine set to pug
app.set('view engine', 'pug')


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req,res) => res.send("This is the about section"))
app.get('/page1', (req,res) => res.send("Welcome to page 1"))
app.get('/home', (req, res) =>
res.render('home',{title: "Home", message:"Welcome to the home page"}))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))