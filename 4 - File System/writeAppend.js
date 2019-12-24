var fs = require('fs');

fs.appendFile('my_file.txt', 'TreinaWebNode', function(err) {
    if (err) {
        console.error(err)
    }
    console.log('Arquivo criado');
});