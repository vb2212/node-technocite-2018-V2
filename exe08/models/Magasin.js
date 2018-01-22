const  mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name :{  //doc
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
    }
})
module.exports = mongoose.model('Magasin',schema)