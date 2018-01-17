//██████████ création server web plusieurs pages ██████████
const fs = require('fs')
module.exports = (req,res) =>{
    fs.readFile(`${process.cwd()}/template/index.html`, {encoding: 'utf-8'},(err, data)=>{
        res.end(data)
    })
}
// cwd= l'endroit où s'execute le process