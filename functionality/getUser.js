const {User} = require('../models/user')

let getUser = (req, res) => {
    let id = req.params.id
    User.findById(id).then((user) => {
        res.send(user)
    })
}

module.exports = {getUser}