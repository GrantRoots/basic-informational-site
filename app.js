// const http = require("http");
// const fs = require("fs");
// const url = require("url");

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(PORT);

// http
//   .createServer((req, res) => {
//     const getUrl = url.parse(req.url, true);
//     const filename = "." + getUrl.pathname + ".html";
//     if (getUrl.pathname == "/") {
//       fs.readFile("index.html", (err, data) => {
//         if (err) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           return console.error(err);
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else {
//       fs.readFile(filename, (err, data) => {
//         if (err) {
//           fs.readFile("404.html", (err, data) => {
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.write(data);
//             return res.end();
//           });
//         } else {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.write(data);
//           return res.end();
//         }
//       });
//     }
//   })
//   .listen(8080);
