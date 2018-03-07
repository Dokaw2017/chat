var socket = io();

    socket.on('connect', () => {
        console.log('Connected to server');

        socket.emit('createMessage', {
            from: 'chebude',
            text: 'are we going out toning?',
            createAt: 123
        });
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    socket.on('newMessage', function(message) {
        console.log('newMessage', message);
    })