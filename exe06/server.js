const http = require('http')
const routes = [
    {url: '/', controller: 'home'},
    {url: '/api/books', controller: 'books'},
]

const router = (req,res) => {
    let indexRoute = routes.findIndex((item) =>item.url === req.url)
    if (indexRoute !== -1) {
        require(`${process.cwd()}/controllers/${routes[indexRoute].controller}`)(req,res)
    }
}
http.createServer(router).listen(8000, (err) =>{
    if(err) throw err
    console.log('server listening port 8000')
})