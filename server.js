const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
  var query = url.parse(req.url, true);
var file = "." + query.pathname;

fs.readFile(file, 'utf8', (err, data) =>{
if (err) {
res.end(`
<h1>Route not Found</h1>
`);
}
res.writeHead(200, { "Content-Type": "text/html" });
  res.write(data);
 res.end();   
  });
})

server.listen(8000, 'localhost', () => {
  console.log("Connected to server Successfully...")

})