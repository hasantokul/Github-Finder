class UI {
    constructor(){
        this.cardBody = document.querySelector(".card-body")
        this.userProfile = document.getElementById("profile")
        this.userRepos = document.getElementById("repos")
        this.lastUsers = document.getElementById("last-users")
    } 

    showError(message){
        const errorMessage = document.createElement("div")
        errorMessage.className = "alert alert-danger"
        errorMessage.textContent = message
        this.cardBody.appendChild(errorMessage)

        setTimeout(function(){
            errorMessage.remove()
        },2000)
    }

    showUser(userData){
        this.userProfile.innerHTML = `
        
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${userData.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${userData.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${userData.name}</strong></div>
                         <hr>
                         <div id="bio">${userData.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${userData.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${userData.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${userData.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${userData.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${userData.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${userData.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        `
    }

    showRepo(userRepo){

        this.userRepos.innerHTML = ""

        userRepo.forEach(repo => {
            this.userRepos.innerHTML += `
            
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <br><br>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>
            
            
            `
        })

    }

    addUserToSearched(username){
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        const searchedUser = document.createElement("li")
        searchedUser.className = "list-group-item"
        searchedUser.textContent = username
        this.lastUsers.appendChild(searchedUser)


    }
    clearLastSearchedFromUI(){
        while (this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild)
        }
    }
}