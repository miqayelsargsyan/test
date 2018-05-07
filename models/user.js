const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require ('lodash');

let UserSchema = new mongoose.Schema({
    phoneNumber: {
        type: Number
        // required: true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    location: {
        type: String
    },
    locationSharing: {
        type: Boolean
    },
    tokens: [{
        access: {
          type: String
        //   required: true
        },
        token: {
            type: String
            // required: true   
        }
    }]
}); 

UserSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    return _.pick(userObject,['_id', 'phoneNumber','name']);
};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, '3s-ge').toString();
     user.tokens.push({access, token});

     return user.save().then(() => {
       return token;
     });
};



UserSchema.methods.removeToken = function (token) {
    let user = this;
  
    return user.update({
      $pull: {
        tokens: {token}
      }
    });
  };

UserSchema.statics.findByToken = function (token) {
 let User = this;
 let decoded;

  try {
   decoded = jwt.verify(token, '3s-ge');
  } catch(e) {
   return Promise.reject();
  }
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};


let User = mongoose.model('User', UserSchema );

module.exports = {User};