var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

http.createServer((req, res) => {
    if (req.url !== "movie.mp4") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('<video src="http://localhost:3000/movie.mp4" controls></video>');
    }
    let file = "./movie.mp4";
    let range = req.headers.range;
    let positions = range.replace('/bytes=/', '').split('-');
    let start = parseInt(positions[0], 10);
    fs.stat(file, (err, stats) => {
        let total = stats.size;
        let end = positions[1];
        let chunkSize = (end - start) + 1;

        res.writeHead(206, {
            "Content-Type": "bytes " + start + '-' + end + '/' + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkSize,
            "Content-Type": "video/mp4"
        })
        res.status(206);

        var stream = fs.createReadStream(file, {start: start, end: end})
            .on('open', () => {
                stream.pipe(res);
            })
            .on('error', (err) => {
                res.end(err);
            })
    })
}).listen(3000)