const {User} = require('../models/user')


let deactivateSharing = (req, res) => {
    let id = req.params.id;
    User.findOneAndUpdate({_id: id}, {$set: {locationSharing: false}}, {new: true}).then((user) => {
        res.send(user)
    });
       
}


module.exports = {deactivateSharing}