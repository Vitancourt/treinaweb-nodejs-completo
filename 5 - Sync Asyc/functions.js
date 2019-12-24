var fs = require('fs');
Promise = require('promise');

function read(file) {
    return new Promise(function (fulfill, reject) {
        fs.readFile(file, function(err, data) {
            if (err) {
                return reject();
            }
            return fulfill(data.toString());
        })
    })
}

read('my_file.txt')
    .then((data)=> {
        console.log(data);
        return '1111';
    })
    .then((data)=> {
        console.log(data);
    });