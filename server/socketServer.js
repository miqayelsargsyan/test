const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
const {User} = require('../models/user');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyParser.json())

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app'
    })
    
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined'
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
        io.emit('newMessage', {
            from: message.from,
            text: message.text
        })
    }) 

       socket.on('join', () => {
        socket.join(user.name)
    })


    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})


let listenServer = server.listen(port, () => {
    console.log(`The server is up on port ${port}`)
})


module.exports = {listenServer, app}