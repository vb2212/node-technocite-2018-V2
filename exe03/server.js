//██████████ Aspirer donnee d'un site.html ██████████
const http = require('http')
const fs = require('fs')
const values = []
const sitesToHack = ['http://www.fasung.be', 'http://www.mons.be', 'http://www.pass.be']
let sitesLoaded = 0
const  getPageFromSiteAndStock = (url) =>{
    http.get(url, res=>{
        let body = ''
        res.on('data', donnee=>{
            body += donnee + ' end'
        })
        res.on('end',()=>{
            console.log(`end of loading ${url}`)
            values.push(body)
            checkFinishProcess()
        })
    })
}
const checkFinishProcess = () =>{
    sitesLoaded++
    if(sitesLoaded === sitesToHack.length){
        console.log('all page are saved in the file')
        const tmpStr = values.reduce((prev, current)=>{
            return `${prev}\n${current}`
        })
        fs.writeFile('result.html',tmpStr, (err)=>{
            if (err) console.log(err)
            console.log('all sites are saved')
        })
    }
}
const init = ()=>{
    sitesToHack.map(item => getPageFromSiteAndStock(item))
}
init()