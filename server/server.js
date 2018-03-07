

const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app)
var io = socketIO(server);

io.on('connection', function (socket) {
    console.log('New user connected');

    socket.emit('oneMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app'
    });

    socket.broadcast.emit('oneMessage', {
        from: 'Admin',
        text: 'Welcome to the chatt app',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdat: new Date().getTime()
        });

       /*socket.broadcast.emit('newMessage', {
           from: newMessage.from,
           text: newMessage.text,
           createdAt: new Date().getTime()
       });*/

       
    });

    socket.on('disconnect', function () {
        console.log('Client disconnected');
    })
});

app.use(express.static(publicPath));


server.listen(port, () => {
    console.log('Started up at port ${port}');
});