const arithmetic = require('./calculator-module/arithmetic-function')

const input1 = 100;
const input2 = 200;
const opType = "sub"

arithmetic(input1,input2,opType,(err,data)=>{
    if(err) throw err;
    else
        console.log("result====>",data)
})