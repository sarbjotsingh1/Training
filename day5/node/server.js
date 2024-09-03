const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h2>Hello</h2>");
  res.end();
});

server.listen(5000, () => {
  console.log("Server started");
});
