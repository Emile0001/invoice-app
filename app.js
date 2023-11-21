const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//         JSON.stringify({
//             data: "Hello World!",
//         })
//     );
// });

// server.listen(3000);

function handleRequest(req, res) {
    res.statusCode = 200;
    res.end("<h1>Hello World</h1>");
}

const server = http.createServer(handleRequest);

server.listen(3000);
