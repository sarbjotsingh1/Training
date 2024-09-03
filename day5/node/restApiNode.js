const http = require("http");
const fs = require("fs/promises");
const user = [];

const server = http.createServer(async (req, res) => {
  if (req.url == "/home") {
    const data = await fs.readFile("./index.html");
    res.write(data);
    res.end();
  } else if (req.url == "/users" && req.method == "GET") {
    res.write(JSON.stringify(user));
    res.end();
  } else if (req.url == "/users" && req.method == "POST") {
    let data = "";
    req.on("data", (chuck) => {
      data += chuck;
    });
    req.on("end", () => {
      user.push(JSON.parse(data));
      res.write("Users reg");
      res.end();
    });
  } else if (req.url == "/users" && req.method == "PUT") {
    res.write("User put method");
    res.end();
  } else if (req.url == "/users" && req.method == "DELETE") {
    res.write("User Delete method");
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("<h2>No page found</h2>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server started");
});
