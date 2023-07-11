4LINES

`01Project-4Lines> npm init`
<br>

`01Project-4Lines> npm i express`
<br>

`01Project-4Lines> npm  i ejs`

`01Project-4Lines> npm i nodemon -g`

`touch index.js`

`mkdir public`

- In Index.js 

first creating server 
```javascript
const express = require('express'); 
const app = express();

const port = 8080;

app.get("/",(req,res)=>{
 //get request from root
});

app.listen(port); // server is running on port 8080

```