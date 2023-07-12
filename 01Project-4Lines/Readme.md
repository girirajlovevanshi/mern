4LINES

- Setup Project
```bash
npm init

npm i express

npm i ejs

npm i nodemon -g

touch index.js

mkdir public
```
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
- add urlencoded function
The urlencoded function is used to parse the incoming requests with URL-encoded payloads. It is a built-in middleware function in Express based on a body parser module.

When there is a HTTP POST request from the client with content type application/x-www-form-urlencoded, this middleware parses the data and populates the req.body object with key-value pairs.

```js
app.use(express.urlencoded({extended:true} ))

```

