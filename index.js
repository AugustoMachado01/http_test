const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Contenty-Type", "text/html");
  res.end("<h1>hello world, este e o meu primeiro server com html!</h1>");
});

server.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
