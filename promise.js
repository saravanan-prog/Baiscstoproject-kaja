/**
 *  Promise we have 3 - state
 *    1. pending
 *    2. resolve   - success
 *    3. rejected  - Failure
 */

let getProfileName = new Promise( 
    (resolve,reject) => {
        setTimeout(()=>{
             resolve("Saravan Durai")
        })
    }
)

//getProfileName.then( data => console.log("data===>" + data) )

let candidateAge = 12
let eligibleVote = new Promise(
    (resolve,reject) => {
        setTimeout(()=>{
            if(candidateAge > 18)
                resolve("Candiate is elgible for vote")
            else
                reject("Candidate not Eligible for vote")
        })
    }
)

eligibleVote.then(
    statusMessage => console.log("statusMessage=====>",statusMessage)
).catch(
    error => { throw error; } 
)