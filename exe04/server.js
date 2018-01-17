//██████████ création server web ██████████
// const http = require('http')
// const fs = require('fs') fs=file system

// http.createServer((req,res)=>{
//     console.log ('We have received a request !!!!!')
//     fs.readFile('template/index.html',{encoding:'utf-8'}, (err, data)=>{
//         res.end(data)
//     })
// }).listen(8000,()=>{
//     console.log('server running and listening port 8000')
// })

//██████████ création server web plusieurs pages ██████████

const http = require('http')

const routes = [
    {url: '/', controller: 'home'},
    {url: '/about', controller: 'about'},
    {url: '/amis', controller: 'amis'}
]
const router = (req, res) => {
    let indexRoute = routes.findIndex(item => item.url === req.url) // cherche l'url taper est égal à celle du tableau
    if (indexRoute !== -1) { // si elle est dans le tableau excute ↓
        require(`./routes/${routes[indexRoute].controller}`)(req,res) // en bleu : inscrit ce qui est dans controller, si about note about
    }else { // si pas ça ↓
        require('./routes/error')(req,res)
    }
}
http.createServer(router).listen(8000, () => {
    console.log('server running and listening port 8000')
})