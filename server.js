var http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");

// app.listen(3000, () => {
//   console.log("Application started and Listening on port 3000");
// });

// app.get("/", (req, res) => {
//   res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
// });

// http.createServer(function (req, res) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     // response.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     // fetch('http://localhost:3000/index.html').then(res => console.log(res.text()));
//     fetch('./pages/index.html').then(function (response) {
//         // The API call was successful!
//         return response.text();
//     }).then(function (html) {
//         // This is the HTML from our response as a text string
//         console.log(html);
//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });

//     // Send the response body as "Hello World"
//     res.end("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
//     // res.end(fetch('http://localhost:3000/index.html').then(res => res.text()));
//     // app.get("/", (req, res) => {
//     //     res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
//     // });
//     // res.end(fetch("./index.html"));
//     // res.end(fetch(""))
// }).listen(3000);

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }
    // console.log(html);
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});   
        response.end(html);
    }).listen(3000);
});

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');