const path = require('path')
const express = require('express')
const port = 8080;

const app = express()


app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")


app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'public')))

// posts
let posts = [
    {
        username : "giriraj",
        content : " Char pal ki chandni, fir anderi raat"
    },
    {
        username : "mistermind",
        content : " galat shok kab gunaho me bdal jaye, babu pata nahi chalta"
    },
    {
        username : "4Lines_Offical",
        content : " 4 lines 4Lines ke naam"
    },
]

app.get('/',(req,res)=>{
    res.render("home", {posts})
})

app.get('/post/new',(req,res)=>{
    res.render("new");
})

app.post('/post',(req,res)=>{
    let {username, content} = req.body;
    posts.push({username,content});
    res.redirect("/");
})

app.listen(port)