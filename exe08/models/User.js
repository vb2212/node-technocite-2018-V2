const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const validator = require('validator')

const schema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        validate:[validator.isEmail, 'Addresse email is invalid'],
        required: 'Introduisez une addresse mail valide svp !!!!--!!!!'
    },
    name:{ 
        type:String,
        required:true,
        trim:true
    }
})

schema.plugin(passportLocalMongoose,{usernameField:'email'}) // amène la methode register (const register --> userController)

module.exports = mongoose.model('User', schema)