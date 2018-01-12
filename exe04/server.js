//██████████ création server web ██████████
// const http = require('http')
// const fs = require('fs')

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
    let indexRoute = routes.findIndex(item => item.url === req.url)
    if (indexRoute !== -1) {
        require(`./routes/${routes[indexRoute].controller}`)(req,res)
    }else {
        require('./routes/error')(req,res)
    }
}
http.createServer(router).listen(8000, () => {
    console.log('server running and listening port 8000')
})