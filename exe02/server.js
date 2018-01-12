
// console.log(process.argv)

// const fs = require('fs')
// fs.readFile(`${process.cwd()}/liste.txt`,{encoding:'utf8'},(err,data)=>{
//     if (err) throw err
//     console.log(data)
// })

// console.log(process.argv[3])

const [action, value] = [process.argv[2], process.argv[3]]
const possibleActions = ['add', 'remove']
const fileMger = require('./tpk/fileManager')
const checkActions = (action) => {
    return possibleActions.filter(item => item === action).length > 0
}
//███████████████████████████████████████████████████████
// function checkValue(value){
//     let returnValue = false
//     if(value !== null || value !== undefined || value !== 0 || value !== NaN){
//         returnValue = true
//     }   
//     return returnValue 
// }
// =
const checkValue = (value) => (value) ? true : false
//███████████████████████████████████████████████████████

const init = () => {
    if (!checkActions(action)) {
        console.log(`Error : the possible actions are :
                                    -add
                                    -remove`)
    } else if (!checkValue(value)) {
        console.log('Error : You need to give value for insertion !!!')
    }
    else {
        fileMger.init('liste.txt', action, value)
    }
}

init()
