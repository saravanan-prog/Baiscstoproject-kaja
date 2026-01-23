module.exports = {

    houseLoanCalc:(principalAmt,year,percentage,callback)=>{
        if(!principalAmt)
            callback("principalAmt is missing")
        else if(!year)
            callback("year is missing")
        else if(!percentage)
            callback("percentage is missing")
        else
            setTimeout(()=>{
                let interest = (principalAmt * percentage * year) / 100
                callback(null,principalAmt + interest)
            })
        

    },

   
}