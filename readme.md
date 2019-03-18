
# Node.js
- [Master Node JS, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!](https://www.udemy.com/nodejs-the-complete-guide/learn/v4/overview)
- [understand-nodejs](https://www.udemy.com/understand-nodejs/)

![Node](https://raw.githubusercontent.com/uwspstar/Full-Stack-Developer/master/Img/node0.png)

- First Class Function
```
// function statement
function greet() {
	console.log('hi');
}
greet();

// functions are first-class
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
	console.log('Hi !');
}
greetMe();

// it's first-class
logGreeting(greetMe);

// use a function expression to create a function on the fly
logGreeting(function() {
	console.log('Hello !');
});

// arrow function expression to create a function on the fly
logGreeting(() =>{
	console.log('Hello !');
});
```
- module.exports
```
var greet = function() {
	console.log('Hello!');
};

module.exports = greet;
```
- require

```
var greet = require('./greet');
greet();
// Check the cache for the requested file.
// 1. If a module already exists in the cache: return its exports object.
// 2. If the module is native: call `NativeModule.require()` with the
//    filename and return the result.
// 3. Otherwise, create a new module for the file and save it to the cache.
//    Then have it load  the file contents before returning its exports
//    object.
```
- IIFE
```
var firstname = 'Jane';

(function (lastname) {

	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
	
}('Doe'));

console.log(firstname);
```
- request and response
```

const http = require('http');
const server = http.createServer((req, res) => {
    //console.log(req);
    //process.exit(); //stop server
    //console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>my header</title></head>')
    res.write('<body>my body</body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);


/*

You can always do that
by pressing CTRL + C in the terminal/ command prompt window
where you started your server (i.e. where you ran node app.js).

On both requests and responses,
Http headers are added to transport metadata from A to B.

The following article provides a great overview of
available headers and their role:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

function rqListener(req,res){

}
http.createServer(rqListener);
*/
```
- routing
```
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);

```

#### Global Features vs Core Modules vs Third-Party Modules

- Global features: Keywords like const or function but also some global objects like process

- Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

- Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

- Example:
```
const fs = require('fs');

//You can now use the fs object exported by the "fs" module.

//Third-party Modules need to be installed (via npm install in the project folder) AND imported.

// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');
```


- added nodemon as a local dependency to our project.

```
The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. 
This allows you to share only your source code, hence reducing the size of the shared project vastly.

The attached course code snippets also are shared in that way, 
hence you need to run npm install in the extracted packages to be able to run my code!

run nodemon app.js would not work in the terminal or command line 
because we don't use local dependencies there but global packages.

You could install nodemon globally if you wanted (this is NOT required though 
- because we can just run it locally): npm install -g nodemon would do the trick. 
Specifically the -g flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.
```
