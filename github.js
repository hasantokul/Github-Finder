class Github {
    constructor(){
        
        this.url = "https://api.github.com/users/"
    }

    getUserData(username){
 
        return new Promise((resolve,reject) => {
            fetch(this.url + username)
            .then(response => response.json())
            .then(userData => resolve(userData))
            .catch(err => reject(err))
        })
    }
    getUserDataRepo(username){
        return new Promise((resolve,reject) => {
            fetch(this.url + username + "/repos")
            .then(response => response.json())
            .then(userRepo => resolve(userRepo))
            .catch(err => reject(err))
        })
    }
}