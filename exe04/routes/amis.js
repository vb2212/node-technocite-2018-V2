const fs = require('fs')
module.exports = (req,res) =>{
    fs.readFile(`${process.cwd()}/public/friends.json`, {encoding: 'utf-8'}, (err, json)=> {
        if(err) {
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end('The server Has a problem please try later')
        } else {
            fs.readFile(`${process.cwd()}/template/amis.html`, {encoding: 'utf-8'}, (err, data)=> {
                if (err) {
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.end('File Not Found')
                } else {
                    res.end(generateHtml(data,json))
                }
            })
        }
        
    })
}

const generateHtml = (tpl,json) =>{
    // let values = JSON.parse(json)
    // let tempArr = values.map(item => item.name)
    // let tempStr = tempArr.join('</li><li>')
    // let htmlStr = tpl.replace('%friends%',tempStr)
    // return htmlStr
    return tpl.replace('%friends%',JSON.parse(json).map(item =>item.name).join('</li><li>'))
}

// fichier json ==> fichier string (caracter (lettres ou chiffres))