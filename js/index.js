var loginEmailInput = document.getElementById("loginEmail");
var loginPasswrodInput = document.getElementById("loginPasswrod");

var allUsers = [];

if(localStorage.getItem("allUsers") != null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}

var userNameSession = JSON.parse(localStorage.getItem("userName"))

function login(){

    for( var i = 0 ; i < allUsers.length ; i++){
        if(isImpty()==false){
            document.getElementById("tryAgainMsg").classList.remove("d-none");
            document.getElementById("wrongMsg").classList.add("d-none");

        } else if(isExite()== false){
            document.getElementById("wrongMsg").classList.remove("d-none");
            document.getElementById("tryAgainMsg").classList.add("d-none");

        }

        if(allUsers[i].email.toLowerCase() == loginEmailInput.value.toLowerCase() &&
        allUsers[i].password.toLowerCase() == loginPasswrodInput.value.toLowerCase()
        ){
            userNameSession = allUsers[i].name
            localStorage.setItem("userName",JSON.stringify(userNameSession))
            document.getElementById("loginHome").addEventListener('click',function(){
                window.location = './welcome.html';
                document.getElementById("tryAgainMsg").classList.add("d-none");
                document.getElementById("wrongMsg").classList.add("d-none");
                return true
            })
        }
    }
}

function isExite(){
    for(var i = 0 ; i < allUsers.length ; i++){
        if(allUsers[i].password.toLowerCase() == loginPasswrodInput.value.toLowerCase() ||
        allUsers[i].email.toLowerCase() == loginEmailInput.value.toLowerCase()
        ){
            return true
        }
    }
    return false
}

function isImpty(){
    if( loginEmailInput.value =="" || loginPasswrodInput.value == ""){
        return false
    }else{
        return true
    }
}
