
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
