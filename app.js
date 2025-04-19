const http = require('http');

// Generate a random number on app start
const deployId = Math.floor(Math.random() * 100000);

const server = http.createServer((req, res) => {
  res.end(`Hello from Jenkins + Sonar! Deploy ID: ${deployId}`);
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
  console.log(`Deploy ID: ${deployId}`);
});
