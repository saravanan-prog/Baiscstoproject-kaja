const { houseLoanCalc } = require('./loan-calc-module/loan-calc')

const principalAmt = 5000000
const year = 25 
const percentage = 8

houseLoanCalc(principalAmt,year,percentage,(err,data) => {
    if(err) throw err
    else
        console.log("loan compute result====>",data)
})
