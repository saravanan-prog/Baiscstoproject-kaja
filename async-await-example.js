
function voterEligibleCheck(candidateAge){

    return new Promise( (resolve,reject) => {
        setTimeout(()=>{
             if(candidateAge  > 18)
                reject("Candidate is Eligble for vote ")
            else
                resolve("Canidate Not Elgible for vote")
        },3000)
       
    } )
}



function displayEligibleMessage(candidateStatus){
    console.log("candidate status====>",candidateStatus)
}

async function main(){

    try{
         let candidateStatus = await voterEligibleCheck(18)
         displayEligibleMessage(candidateStatus)
    }
    catch(error){
        console.error("error===>",error)
    }
}

main()