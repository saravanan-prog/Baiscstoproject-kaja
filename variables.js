/****
 * let  - Block scope 
 * var  - Global scope
 * const - Block scope immutable
 * */ 

function blockscope(){
    let a;
    a = 100
    console.log("a==>",a)
    
}

blockscope()

function globalscope(){
    var b = 200;
    var b = 500
    console.log("b==>",b)
    var b;
}
globalscope()


function blockscopeImmutable(){
    const c = 500;
    c = 100
    console.log("c==>",c)
    
}

blockscopeImmutable()