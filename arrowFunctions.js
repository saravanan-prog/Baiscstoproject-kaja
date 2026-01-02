const printMessage = () => console.log("welcome to Java script world")
//printMessage()

const readData = a => a
//console.log(readData(5))


const sum = (a,b,c) =>  a + b + c
let result = sum(null,10,5)
//console.log("reuslt===>",result)


const printData = (readData) => {
    return readData
}
//console.log(printData(100))

const sumoftotal = (item1,item2,item3) => {

    let total = item1 + item2 + item3
    let discountFinalPrice = total - ( total*50/100 )

    return {
         total : total,
         discountPrice : discountFinalPrice
    }


}
let computeproduct = sumoftotal(100,100,100)

console.log("total amount ===>",computeproduct.total,"offer applied ===>",computeproduct.discountPrice)