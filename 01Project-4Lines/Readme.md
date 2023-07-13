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

const port = 4000;

app.get("/",(req,res)=>{
 //get request from root
});

app.listen(port); // server is running on port 4000

```
- add urlencoded function
=> The urlencoded function is used to parse the incoming requests with URL-encoded payloads. It is a built-in middleware function in Express based on a body parser module.

When there is a HTTP POST request from the client with content type application/x-www-form-urlencoded, this middleware parses the data and populates the req.body object with key-value pairs.

`app.use()` method is used in Express to add middleware functions to the request-response cycle. Middleware functions can perform various tasks, such as logging, authentication, or serving static files.

```js
app.use(express.urlencoded({extended:true} ))

```

`app.set()`   function is used to assign the setting name to value.

`path.join(__dirname, 'public')`
=> uses the path module to construct the absolute path to the "public" directory within your project.

`__dirname` is a global variable in Node.js that represents the directory in which the current script resides.
`path.join()` combines the directory path represented by `__dirname` with the `"public"` directory name to form a complete path.

`express.static()` is built-in Express middleware function serves static files from the specified directory. In this case, it's serving files from the  "public" directory.

```js

const path = require('path');

// Serve static files from the "public" directory
app.set(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs") // app.set(name,value) function is used to assign the setting name to value.
app.set("views",path.join(__dirname, "views"))

```

- add home.ejs in "views" dir

- write a boiler plate code 

```js
app.get("/",(req,res)=>{
    res.render("home")
});
```

-`nodemon   `
