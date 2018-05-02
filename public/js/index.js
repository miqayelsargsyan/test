let socket = io();

socket.on('connect', function () {
    console.log('connected to server')
})

socket.on('disconnect', function () {
    console.log('disconnected from server')
})

socket.on('newEmail', function (email) {
    console.log('New email :', email)
})

socket.emit('createEmail', {
    to: 'ifyoucan',
    text: 'Hey, This is Miqayel'
})