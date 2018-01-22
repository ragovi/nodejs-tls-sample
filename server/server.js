const fs = require('fs'),
  https = require('https'),
  express = require('express');

const  app = express();

https.createServer({
  key: fs.readFileSync('mockserver.key'),
  cert: fs.readFileSync('mockserver.crt')
}, app).listen(55555);

app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Hello, Secure World!</h1>');
});
