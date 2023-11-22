// This method was actually suggested through auto complete
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//         JSON.stringify({
//             data: "Hello World!",
//         })
//     );
// });

// server.listen(3000);

// 2nd method
// const http = require("http");
// function handleRequest(request, response) {
//     if (request.url === "/currenttime") {
//         response.statusCode = 200;
//         response.end("<h1>" + new Date().toISOString() + "</h1>");
//     } else if (request.url === "/") {
//         response.statusCode = 200;

//         response.end("<h1>Hello World</h1>");
//     }
// }
// const server = http.createServer(handleRequest);

// server.listen(3000);

// Express method

const express = require("express");

const app = express();

app.get("/currenttime", (req, res) => {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(3000);
