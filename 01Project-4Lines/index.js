const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true} ))

const port = 8080;

app.get("/",(req,res)=>{

});

app.listen(port);
