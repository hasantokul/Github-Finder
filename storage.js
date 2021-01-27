class Storage {

    static getAllSearchedUserFromStorage(){

        let users 

        if (localStorage.getItem("users") === null){
            users = []
        }
        else {
            users = JSON.parse(localStorage.getItem("users"))
        }
        return users
    }

    static addUserToStorage(username){
        let users = this.getAllSearchedUserFromStorage()
        
        if (users.indexOf(username) === -1){
            users.unshift(username)
            
        }
        

        localStorage.setItem("users",JSON.stringify(users))
    }
    static clearAllSearchedFromStorage(){
        localStorage.removeItem("users")
    }

    
}