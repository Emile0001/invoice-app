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
app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", (req, res) => {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", (req, res) => {
    res.send(
        '<form action="/store-user" method="POST"><label>Name: </label><input type="text" name="username"><button>Submit</button></form>'
    );
});

app.post("/store-user", (req, res) => {
    const userName = req.body.username;
    console.log(userName);
    res.send("<h1>Username stored!</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
