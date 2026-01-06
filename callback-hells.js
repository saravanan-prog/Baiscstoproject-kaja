const users =  require('./dummy-response/users.json')
const posts  = require("./dummy-response/post.json")




const login = (userDetailsParams,callback) => {

    const {username,password}= userDetailsParams
    if(!username)
        callback("username is empty")
    else if(!password)
        callback("password is empty")

    else if(username !=null && password!=null ){
          const profile = users.filter(value => value.username == username && value.password == password )
          callback(null,profile[0].id)
    }
    else
        callback("Authentican failed")

}

const getUserProfile = (userID,callback) => {
     if(!userID)
        callback("userID is Empty")
     else{
         const profile = users.filter(value => value.id == userID)
        callback(null,profile)
     }

    
}

const getPost = (userID,callback) => {
         if(!userID)
        callback("userID is Empty")
     else{
         const profile = posts.filter(value => value.userID == userID)
        callback(null,profile)
     }
}


login( {username:"johnd",password:"m38rmF$"}, function(error,authenticateProfileID){
    if(error)
        throw error;
    else{
        getUserProfile(authenticateProfileID,function(error,profile){
            if(error)
                throw error
            else 
                getPost(authenticateProfileID,function(error,post){
                    
                    console.log("user Post====>",post)
            
                })
        })
    }
        

})