const mathLogic = require('./calc-action')
const {add,sub,mul,div} = require('./calc-action')

//method 1 
console.log("addition===>",mathLogic.add(10,5))
console.log("Subraction===>",mathLogic.sub(10,5))
console.log("Multiplication===>",mathLogic.mul(10,5))
console.log("Division===>",mathLogic.div(10,5))

//method 2
console.log("addition===>",add(10,5))
console.log("Subraction===>",sub(10,5))
console.log("Multiplication===>",mul(10,5))
console.log("Division===>",div(10,5))






