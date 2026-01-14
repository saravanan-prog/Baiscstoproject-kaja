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




// let getWorkdetails  = new Promise( 
//     (resolve,reject) => {
//         setTimeout(()=>{
//              resolve({2002:"TCS",2003:"CTS",2004:"wirpo"})
//         },3000)
//     }
// )

let getWorkdetails  = new Promise( 
    (resolve,reject) => {
        setTimeout(()=>{
             reject("Currently work details is not found")
        },3000)
    }
)


Promise.all([getProfile,getWorkdetails])
.then(
    (data) => console.log("data======>",data)
)
.catch(
    error => console.log("error====>",error)
)