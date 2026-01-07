const users = require('./dummy-response/users.json')
const cartItems = require('./dummy-response/Cart.json')

/* Function Defination */
const login = (params,callback) => {
    const {username,password} = params
    !username && callback("username is empty")
    !password && callback("password is empty")
    if( username && password ) {
        let authenticatedPerson = users.filter((value) => value.username == username && value.password == password)
        callback(null, authenticatedPerson.length != 0 ? authenticatedPerson : "user not Found" )
    
    }
}

const myCart = (userId,callback) => {
    !userId && callback("userID is empty") 
    if(userId){
        let purchasedItems = cartItems.filter( value => value.userId == userId )
        callback(null, purchasedItems.length != 0 ? purchasedItems : "Cart is Empty")
    }
}




//Function Call
let params = {
    username :  "johnd",
    password : "m38rmF$"
}

login(params,function(error,authData){
    if(error)
        throw error
    else
        myCart(authData[0].id,function(error,purchasedItem){
            if(error)
                throw error
            else
                console.log("purchasedItem=====>",purchasedItem)

        })
})