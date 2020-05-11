var cluster = require('cluster'),
    http = require('http'),
    numCpus = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on('online', (worker) => {
        console.log(`worker ${worker.process.pid} is online`);
    });

    cluster.on('listening', (address) => {
        console.log('worker is listening')
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.proccess.pid} is dying`)
    })
} else {
    http.createServer((req, res)=>{
        res.writeHead(200);
        res.end(`proccess ${process.pid} is saying hello`);
    }).listen(8000);
}