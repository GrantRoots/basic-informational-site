const http = require("http");
const fs = require("fs");
const url = require("url");

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send()
// });

http
  .createServer((req, res) => {
    const getUrl = url.parse(req.url, true);
    const filename = "." + getUrl.pathname + ".html";
    if (getUrl.pathname == "/") {
      fs.readFile("index.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return console.error(err);
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile(filename, (err, data) => {
        if (err) {
          fs.readFile("404.html", (err, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          });
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    }
  })
  .listen(8080);
