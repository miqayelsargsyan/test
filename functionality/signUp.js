const {User} = require('../models/user');
const _ = require('lodash');

let user;
let body;

let signUp = (req, res) => {
    body = _.pick(req.body,['name','phoneNumber']);

    user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user)
    }).catch((e) => {res.status(400).send(e)});
}


module.exports = {signUp};