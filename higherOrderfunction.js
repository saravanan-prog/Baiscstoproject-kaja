/**
 *  High order function 
 *     map
 *     filter
 *     reduce
 *     some
 *     every
 */

function exampleLearningMap(){
    const fruits = ["apple","orange","grapes"]
    const cloneFruits = fruits.map( (value,index,arr) => {
        return value.toUpperCase()
    })

    //cloneFruits[1] ="pineapple"
    console.log("clone fruits===>",cloneFruits)
    console.log(" fruits===>",fruits)

}

//exampleLearningMap()

function exampleLearningFilter(){
    const fruits = ["apple","orange","grapes"]
    const filteredFruits = fruits.filter( value => value.indexOf('p') != -1 )

    console.log("filterFruits===>",filteredFruits)
   
}
//exampleLearningFilter()


function removeDuplicateElements(){

    let numbers = [1,1,6,6,8,8,8,10,25,8,4,3]
    let uniqueData = numbers.filter((value,index,arr)=>{
        
        return index === arr.indexOf(value)  
    })

    console.log("numbers=====>",numbers)
    console.log("uniqueData====>",uniqueData) 
}
//removeDuplicateElements()



function findRepeatedElements(){

    let numbers = [1,1,6,6,8,8,8,10,25,8,4,3]
    let repeatedElements = numbers.filter((value,index,arr)=>{
        
        return index !== arr.indexOf(value)  
    })
    let finalResult = new Set(repeatedElements)
}
findRepeatedElements()