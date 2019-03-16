
# Node.js
[Master Node JS, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!](https://www.udemy.com/nodejs-the-complete-guide/learn/v4/overview)
![Node](https://raw.githubusercontent.com/uwspstar/Full-Stack-Developer/master/Img/node0.png)

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
```
Global Features vs Core Modules vs Third-Party Modules
Section 4, Lecture 43
The last lectures contained important concepts about available Node.js features and how to unlock them.

You can basically differentiate between:

Global features: Keywords like const or function but also some global objects like process

Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:

const fs = require('fs');

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):

// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');
```
