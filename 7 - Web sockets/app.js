var io = require('socket.io')(3000);

io.on('connection', (socket)=> {
    console.log('Usuário conectado');

    socket.on('client_message', (data)=>{
        io.sockets.emit('server_message', data);
    });

})