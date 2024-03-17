// imports built-in 'http' module to facilitate server development
const http = require("http");
// imports built-in 'fs' module's promises
const fs = require('fs').promises;

// setting up host and port address
const host = 'localhost';
const port = 8046;

// callback function which gets triggered upon a client's request
// this function maintains two arguments - request object and response object
const requestListener = function (req, res) {
    // request object's url key contains the client's requested specific url route
    var url = req.url;
    // setting the response object's data(what type of data will be sent)
    res.setHeader("Content-Type", "text/plain");
    // routing
    // '/' => homepage
    if (url === '/') {
        // writes this string onto response object's data
        res.write("Hello form Node Server \n\n");
    } else if (url === '/Link1') {
        // to set the response object such that it contains a downloadable file/attachment
        res.setHeader("Content-Disposition", `attachment;filename=fc.txt`);
        // response status code
        res.writeHead(200);
        // writes content/string to attachment file
        res.write("This is a content from the browser-Link1\n\n")
    } else if (url === '/Link2') {
        res.write('Page Link2');
    }
    // response sent and request instance terminated
    res.end();
}
// creates the server
const server = http.createServer(requestListener);

// makes the server active and listening to incoming client requests
// .listen() listens incoming requests on predefined host and port address, and triggers the callback upon successful activation of server
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});