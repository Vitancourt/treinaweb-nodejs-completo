var fs = require('fs');

fs.writeFile('my_file.txt', 'TreinaWebNode', function(err) {
    if (err) {
        console.error(err)
    }
    console.log('Arquivo criado');
});