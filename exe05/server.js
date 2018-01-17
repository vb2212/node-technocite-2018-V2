// solution 1

const fs = require('fs')

// fs.readFile(`${process.cwd()}/datas/file1.txt`,(err,data)=>{
//     let allData = ''
//     allData += data
//     fs.readFile(`${process.cwd()}/datas/file2.txt`,(err,data)=>{
//         allData += data
//         console.log(allData)
//     })
// })

const readFile = (file) => {
    return new Promise((resolve,reject) => {
        fs.readFile(file, {encoding : 'utf-8'}, (err,data)=>{
            if(err) reject(err)
            resolve(data)
        })   
    })
}
//solution 2

// readFile(`${process.cwd()}/datas/file1.txt`)
//     .then(data => { // data = c'est moi qui le défini
//         console.log(data)
//         readFile(`${process.cwd()}/datas/file2.txt`)
//             .then(data => {
//                 console.log(data)
//             }).catch(err => {
//                 console.log(err)
//             })
//     })

// solution 3
//                                    0 ↓                                             1 ↓
Promise.all([readFile(`${process.cwd()}/datas/file1.txt`), readFile(`${process.cwd()}/datas/file2.txt`)])
    .then(results => {
        console.log(results[1/*0*/])
    }).catch(err => {
        console.log(err)
    })