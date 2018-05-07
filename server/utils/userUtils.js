const {User} = require('../../models/user');
// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

let getUser = (id) => {
    User.findById(id).then((user) => {
        return user;
    })
}



  module.exports = {addUser, removeUser, getUser, getUserList}