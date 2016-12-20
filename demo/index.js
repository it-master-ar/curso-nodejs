// cargar modulo http
const http = require('http');

// crear un web server que responde "Hello Server" a todos los requests.
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Server!');
});

// attachar el servidor al puerto 8000
server.listen(8000);

console.log('Server running at :8000');
