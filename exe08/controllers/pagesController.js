const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')
exports.home = async (req,res)=>{
    const magasins = await Magasin.find()
    res.render('home', {title: 'home page', magasins:magasins})
}
exports.about = (req,res)=>{
    res.render('about', {title: 'about page', test:'Ceci est un test'})
}