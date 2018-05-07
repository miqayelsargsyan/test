const {User} = require('../models/user');

let locationSharing = (res) => {
    User.findOne({locationSharing: true}).then((user) => {
        res.send(user)
    })
}


module.exports = {locationSharing}