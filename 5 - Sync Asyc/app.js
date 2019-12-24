var fs = require('fs')

console.time('Assíncrono');
var counter = 0;

for (var i = 0; i < 1000; i++) {
    fs.readFile('my_file.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        counter++;
        console.log('Assíncrono: ' + data.toString());
        if (counter === 1000) {
            console.timeEnd('Assíncrono');
        }
    })
}

console.time('Síncrono');
counter = 0;
for (var i = 0; i < 1000;i++) {
    var data = fs.readFileSync('my_file.txt');
    console.log('Síncrono ' + data);
    counter++;
    if (counter === 1000) {
        console.timeEnd('Síncrono');
    }
}