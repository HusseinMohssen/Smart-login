
var userNameSession = JSON.parse(localStorage.getItem("userName"))

function displayWelocme(){
    var userNameContainer = document.getElementById("userName")
    userNameContainer.innerHTML = `Welcome ${userNameSession}`
}

function logOut(){
    localStorage.removeItem("userName")
}