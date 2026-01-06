
function addition(callback){
    let a = 100
    let b = 500
    callback(a+b)
}

// addition(function(result){
//     console.log("addition result ====>",result)
// })






function sumofNumbers(firstNumber,secondNumber,callback){
    setTimeout(()=>{
        callback(firstNumber + secondNumber)
    },6000)
    
}

// sumofNumbers(200,300,function(result){
//     console.log("sum of numbers result ===>",result)
// })




function getProductList(callback){

    setTimeout(()=>{
         callback(null,["apple","orange","grapes"])
    })
   
}

 getProductList((error,data)=>{
    console.log("data::::",data)
    return data
})

