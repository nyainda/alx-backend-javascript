const http = require('http');

const PORT = 1245;

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);
app.listen(PORT, () => {
  console.log('...');
});

module.exports = app;
