const config = require('../mongoose/mongoose')
const {listenServer, app} = require('../socketServer/socketIO')
const {User} = require('../models/user')
const {signUp} = require('../functionality/signUp')
const mongoose = require('mongoose')

app.post('/api/signUp', (req, res) => {
    signUp(req, res)
})



