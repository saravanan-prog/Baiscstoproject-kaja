const userList = require('./dummy-response/users.json')
const cartItems = require('./dummy-response/Cart.json')


const login = (requestParams) => {
    const {username,password} = requestParams
    let promise =  new Promise((resolve,reject) => {
        !username && reject("username is empty")
        !password && reject("password is empty")
        setTimeout(()=>{
            let getProfile = userList.filter(value => value.username === username && value.password ===password)
            getProfile ? resolve(getProfile[0].id) : reject("Invalid user")
        },1000)
    })

    return promise
}
const getcartItems = (userid) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            let myCartItems  = cartItems.filter(items => items.userId == userid )
            myCartItems ? resolve(myCartItems) : reject("No Items Found")
        })
        
    })

}

let params = {
    username :  "johnd",
    password : "m38rmF$"
}


login(params).then(
    (profileID) => getcartItems(profileID).then(
        (purchasedItems)=> console.log("purchasedItems====>",purchasedItems)
    )
).catch(
    err => {
        console.error("error===>",err)
    }
)