const mongoose = require('mongoose');
const {User} = require('../models/user')


    let user = new User({
        name: 'Misha'
    })
    user.save()


