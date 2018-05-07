const config = require('../mongoose/mongoose')
const mongoose = require('mongoose')
const {listenServer, app} = require('./socketServer')
const {signUp} = require('../functionality/signUp')
const {User} = require('../models/user')
const {activateSharing} = require('../functionality/activateSharing')
const {deactivateSharing} = require('../functionality/deactivateSarhing')
const {getUser} = require('../functionality/getUser')
const {location} = require('../functionality/location')

app.post('/api/signUp', (req, res) => {
    signUp(req, res) 
})

app.get('/api/getUser', (req, res) => {
    getUser(req, res)
})

app.get('/api/location', (req, res) => {
    location(req, res)
})

app.patch('/api/activateSharing', (req, res) => {
    activateSharing(req, res)
})

app.patch('/api/deactivateSharing', (req, res) => {
    deactivateSharing(req, res)
})


