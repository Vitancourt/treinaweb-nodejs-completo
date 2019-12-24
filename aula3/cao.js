var events = require('events');

class Cao extends events.EventEmitter {
    latir() {
        console.log('AuAu');
    }
}

var Rex = new Cao();

Rex.on('pessoa_no_portao', Rex.latir);

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
Rex.removeListener('pessoa_no_portao', Rex.latir);
Rex.emit('pessoa_no_portao');