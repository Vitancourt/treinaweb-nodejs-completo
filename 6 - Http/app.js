const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer(function(req, res) {

    let url_parts = url.parse(req.url);

    let path = '.'+url_parts.pathname;
    console.log(url_parts.pathname);
    fs.readFile(path, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Not found');
            return res.end();
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data.toString());
        res.end();
    })

});

server.listen(3000);