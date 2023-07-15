const path = require('path')
const express = require('express')
const {v4 : uuidv4} = require('uuid') // v4 is the version 4 of uuid package
const port = 8080;

const app = express()


app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")


app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'public')))

// posts
////uuidv4(),// this funcation create a unique id for us each time
let posts = [
    {
        id: uuidv4(),
        username : "giriraj",
        content : " Char pal ki chandni, fir anderi raat"
    },
    {
        id: uuidv4(),
        username : "mistermind",
        content : " galat shok kab gunaho me bdal jaye, babu pata nahi chalta"
    },
    {
        id: uuidv4(),
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

app.get("/post/:id", (req,res)=>{
    let {id} = req.params;
    let relatedPost = posts.find((post) => id === post.id)
    res.send(relatedPost);
})

app.listen(port)