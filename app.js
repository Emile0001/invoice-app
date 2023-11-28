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
const fs = require("fs"); //file system package
const path = require("path"); //construct complete paths compatable on on OS
const port = 3000;

app.use(express.urlencoded({ extended: false })); //middleware

app.get("/currenttime", (req, res) => {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", (req, res) => {
    res.send(
        '<form action="/store-user" method="POST"><label>Enter Name: </label><input type="text" name="username"><button>Submit</button></form>'
    );
});

//display stored user names
app.get("/users", (req, res) => {
    const filePath = path.join(__dirname, "data", "users.json"); //find the path
    const fileData = fs.readFileSync(filePath); //read the data
    const existingUsers = JSON.parse(fileData); //parse the data

    // // Create an array to store list items
    const listItems = existingUsers.map((user) => `<li>${user}</li>`);
    // // Send HTML with the list
    res.send(`<ol>${listItems.join("")}</ol>`);

    //other way of displaying the users in a list
    // let responseData = "<ul>";
    // for (const user of existingUsers) {
    //     responseData += "<li>" + user + "</li>";
    // }
    // responseData += "</ul>";
    // res.send(responseData);
});

app.post("/store-user", (req, res) => {
    const userName = req.body.username;
    console.log(userName);

    const filePath = path.join(__dirname, "data", "users.json");
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    existingUsers.push(userName);

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));

    res.send("<h1>Username stored!</h1>");
});

app.listen(port, () => {
    console.log("Server is running on port " + port + ".");
});
