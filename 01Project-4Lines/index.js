const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true} ))

app.set(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))


const port = 4000;

let posts = [
    {
        username : "giri",
        content : "4 din ki chandni fir anderi raat",
    },
    {
        username : "4Lines",
        content : "4 lines for 4Lines",
    },
    {
        username : "broken Heart",
        content : "4ro disha me dikhe bs tu hi tu",
    },
    {
        username : "sayar",
        content : "4 labj bya kr gye jidgi",
    },
]

app.get("/",(req,res)=>{
    res.render("home", {posts})
});

app.listen(port);
