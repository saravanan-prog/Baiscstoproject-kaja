module.exports =  arithmetic = (input1,input2,operationType,callback) => {

    if(!input1)
        callback("input1 argument is missing")
        
    else if(!input2)
        callback("input2 argument is missing")
    else
        switch(operationType){
            case 'add':
                callback(null,input1 + input2)
                break;
            case 'sub':
                callback(null,input1 - input2)
                break;
            case 'mul':
                callback(null, input1 * input2)
                break;
            case 'div':
                callback(null,input1 / input2)
                break;
            case 'mod':
                callback(null,input1 % input2)
                break;
            default :
                callback(null,0)
                break;
            
        }
}

