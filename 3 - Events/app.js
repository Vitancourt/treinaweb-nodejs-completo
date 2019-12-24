var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('meu_evento', function(numero) {
    console.log('meu evento', numero);
});

emitter.emit('meu_evento', 123);