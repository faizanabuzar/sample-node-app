const http = require('http');
const port = 3000;
const random = Math.floor(Math.random() * 1000);

const server = http.createServer((req, res) => {
  res.end(`Hello from Node.js app! Random: ${random}`);
});

server.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
//checking trigger 1.1
