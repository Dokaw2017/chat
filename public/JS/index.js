var socket = io();

    socket.on('connect', () => {
        console.log('Connected to server');
        socket.on('oneMessage', function(message) {
            console.log('oneMessage', message);
        });
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    