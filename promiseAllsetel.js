/**
 *  Promise we have 3 - state
 *    1. pending
 *    2. resolve   - success
 *    3. rejected  - Failure
 */

let getProfile = new Promise( 
    (resolve,reject) => {
        setTimeout(()=>{
             resolve({name:"saravana",age:25,education:"TCS"})
        },4000)
    }
)




let getWorkdetails  = new Promise( 
    (resolve,reject) => {
        setTimeout(()=>{
             reject("work details is not found")
        },3000)
    }
)


Promise.allSettled([getProfile,getWorkdetails])
.then(
    (data) => console.log("data======>",data)
)
.catch(
    error => console.log("Error=====>",error)
)
