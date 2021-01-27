const githubForm = document.getElementById("github-form")
const nameInput = document.getElementById("githubname")
const deleteButton = document.getElementById("clear-last-users")

eventListeners() 

const github = new Github()
const ui = new UI()

function eventListeners(){
    githubForm.addEventListener("submit",getAllGithub)
    deleteButton.addEventListener("click",clearLastSearched)
    document.addEventListener("DOMContentLoaded",LoadLastSearched)

}

function getAllGithub(e){
    let username = nameInput.value.trim()
    github.getUserData(username)
    .then(userData => {
        if(userData.message === "Not Found"){
            ui.showError("Kullanıcı Bulunamadı")
        }
        else{
            ui.showUser(userData)
            Storage.addUserToStorage(username)
            ui.addUserToSearched(username)
            github.getUserDataRepo(username)
            .then(userRepo => ui.showRepo(userRepo))
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))

    nameInput.value = ""

    e.preventDefault()
}

function clearLastSearched(){
    Storage.clearAllSearchedFromStorage()
    ui.clearLastSearchedFromUI()
}

function LoadLastSearched(){
    const searchedUsers = Storage.getAllSearchedUserFromStorage()
    searchedUsers.forEach(user => {
        ui.addUserToSearched(user)
    })

}