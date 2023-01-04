const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    
    username: {
        type: String,
        required: [true,'Por favor coloca nombre de usuario nuevamente'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'por favor coloca contraseña'],
    },
    profile:{
        type: String,
        required: [true,'por favor selecciona un perfil '],
    }
    
});
UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

// export model
const User = mongoose.model('User', UserSchema);
module.exports = User