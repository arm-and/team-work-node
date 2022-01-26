const fs = require('fs');
const http = require('http');
const PORT = 5000;
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'static', 'users.json'), (error, data) => {
            error ? console.log(error) : (res.end(data));
        })
    }
});

server.listen(5000, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
