// const a = 3
// a=5
// const arr =[]
// arr.push('test')
// arr[1]='test2'
// let a = 4
// {
//     let a=3
// }
// console.log(a)

// (function(msg){
//     console.log(msg)
// })('a')

// var obj ={
//     name:'gilles',
//     job:'student',
//     toString : function(){
//         // return 'name is '+this.name+' job is '+this.job  //ou
//         return `name is ${this.name} job is ${this.job}`
//     }
// }

// console.log(obj.toString())

// const [a,b]=['gilles','bertrand']
// console.log(b)
// console.log(a)

// const numbers = [1,2,3,4,5,6,7,8]

// console.log(numbers)

// function dblNumbers(arr){
//     const arrDbl = []
//     for (let i=0, length = arr.length; i<length; i++){
//         arrDbl.push(arr[i]*2)
//     }
//     return arrDbl
// }
// console.log(dblNumbers(numbers))

// const numbers = [1,2,3,4,5,6,7,8]
// function dblNumbers(arr){
//     // return arr.map(function(item){
//     //     return item*2
//     // }) //ou
//     return arr.map(item=>item*2)
// }
// console.log(dblNumbers(numbers))

const numbers = [1,2,3,4,5,6,7,8]

// console.log(numbers.reduce((prev,current)=>{
//     return prev+current
// },0))

console.log(numbers.filter(item => item%2 ===0 ))