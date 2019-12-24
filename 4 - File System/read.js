var fs = require('fs');

fs.readFile('my_file.txt', function (err, data) {
    if (err) {
        console.error(err);
    }

    console.log(data.toString());
})