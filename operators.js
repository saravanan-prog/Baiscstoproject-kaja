/**'
 *   Arithmetic (+,-,*,/,%)
 *   logical    ( && , ||, !)
 *   Assignment (=,+=,)
 *   Comparission (==,===, <,>,<=,>=)
 *   increment and decrement operator ( ++preIncrement, postIncrement++ )
 *   typeof opeartor   (typeof)
 *   ternary operator = (testcondition) ?  true-block : false-block
 *   spread operators (...) = Deep copy
 */

function exampleTernaryOperator(){

    const fruit = "Banana";
    const taste = ( fruit === "apple" ) ? "sweet" : "spicy"
    console.log("taste====>",taste)

}

function shallowCopy(){
    let fruits = ["apple","orange","grapes","mango"]
    let snacks = fruits    //shallow copy
   
    snacks.push("pomograte")
    snacks.push("gova")

    console.log("snacks====>",snacks)
    console.log("fruits=====>",fruits)
}
//shallowCopy()


function deepCopy(){
    let fruits = ["apple","orange","grapes","mango"]
    let snacks = [...fruits]
    snacks.push("pomograte")
    snacks.push("gova")

    console.log("snacks====>",snacks)
    console.log("fruits=====>",fruits)
}
//deepCopy()

function chatGptExampleShallowandDeep(){
    let person1 = { 
        name : "saravanan",
        employeeType:"P",
        address : {
            streetname:"car street",
            area:"velachery",
            city:"chennai"
        }
    }

    let person2 = { 
            ...person1, 
            address:{
                ...person1.address
            } 
    }

    person2.name = "kaja";
    person2.address.streetname = "East coast street"
    person2.address.area = "alangkulam"
    person2.address.city = "Thirunelveli"

    let person3 = structuredClone(person1)
    person3.name = "vimal";
    person3.address.streetname = "west coast street"
    person3.address.area = "Thirukoilvlur"
    person3.address.city = "Villupuram"


    console.log("person1===>",person1)
    console.log("person2===>",person2)
    console.log("person3===>",person3)




}

//chatGptExampleShallowandDeep()

let persons = [ 
    { 
        name : "saravanan",
        employeeType:"P",
        address : {
            streetname:"car street",
            area:"velachery",
            city:"chennai"
        }
    },
    { 
        name : "kaja",
        employeeType:"P",
        address : {
            streetname:"bus street",
            area:"siruseri",
            city:"chennai"
        }
    }
]

let newPersons = [...persons]
//newPersons[1].name = "XXXX"

console.log("persons===>",persons)
console.log("newPersons===>",newPersons)

