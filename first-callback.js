// In node JS first callback know as error


function addition(firstNumber,secondNumber,callback){
    if(firstNumber == null)
        callback("first number is empty")
    else if(secondNumber == null)
        callback("second number is empty")
    else if(firstNumber == null && secondNumber == null)
        callback("Both input  number is empty")
    else
        callback( null,firstNumber + secondNumber)
}

addition(200,200,function(error,result){
    if(error)
        throw error
    else 
        console.log("result=====>",result)
})
