const {User} = require('../models/user')

 

let activateSharing = (req, res) => {
    let id = req.params.id;
    User.findOneAndUpdate({_id: id}, {$set: {locationSharing: true}}, {new: true}).then((user) => {
        res.send(user)
    });
       
}


module.exports = {activateSharing}