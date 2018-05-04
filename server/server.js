const config = require('../mongoose/mongoose')
const {listenServer, app} = require('../socketServer/socketIO')
const {signUp} = require('../functionality/signUp')
const mongoose = require('mongoose')
const {User} = require('../models/user');

app.post('/api/signUp', (req, res) => {
    signUp(req.body.name, res) 
})



