const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true} ))

app.set(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))


const port = 4000;

app.get("/",(req,res)=>{

});

app.listen(port);
