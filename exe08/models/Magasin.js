const  mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name :{  // écrit dans la doc
        type:String,
        require:'Thanks to introduce a name'
    },
    slug:{
        type:String,
        trim:true // enlève les espaces 
    },
    description:{
        type:String
    },
    photo:{
        type:String
    },
    location:{
        type:{
            type:String,
            default:'Point'
        },
        coordinates:[
            {
                type:Number,
                required: 'Vous devez entrer des coordonnées'
            }
        ],
        address: {
            type:String,
            required: 'Vous devez fournir une addresse'
        }
    }
})
module.exports = mongoose.model('Magasin',schema)