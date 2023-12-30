
var userNameInput = document.getElementById("userNameInput");
var UserEmailInput = document.getElementById("UserEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");

var accountExistMsg = document.getElementById("accountExistMsg")

var allUsers = []

if(localStorage.getItem("allUsers") != null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}

function signUp(){

    if(isImpty()==false){
        document.getElementById("tryAgainMsg").classList.remove("d-none");
        document.getElementById("confirmMsg").classList.add("d-none");
        document.getElementById("accountExistMsg").classList.add("d-none");


    }
    else if(isInputsValid() && isExite() == false){
        var user = {
            name: userNameInput.value,
            email: UserEmailInput.value,
            password: userPasswordInput.value,
        }
    
        allUsers.push(user);
        localStorage.setItem("allUsers",JSON.stringify(allUsers));
        document.getElementById("tryAgainMsg").classList.add("d-none");
        document.getElementById("confirmMsg").classList.remove("d-none");
        document.getElementById("accountExistMsg").classList.add("d-none");

        console.log(allUsers);
    }else{
        document.getElementById("accountExistMsg").classList.remove("d-none");
        document.getElementById("tryAgainMsg").classList.add("d-none");
        document.getElementById("confirmMsg").classList.add("d-none");


    }


}

function valUserName(){
    var userNamePatern = /^[a-zA-Z0-9]{1,}$/;
    if(userNamePatern.test(userNameInput.value) == true){
        
        userNameInput.classList.remove("is-invalid");
        userNameInput.classList.add("is-valid");
        return true
    }else{
        
        userNameInput.classList.remove("is-valid");
        userNameInput.classList.add("is-invalid");
        return false
    }
}

function valEmail(){
    var userEmailPatern = /^[a-zA-Z0-9]{1,}$/;
    if(userEmailPatern.test(UserEmailInput.value) == true){
        
        UserEmailInput.classList.add("is-valid");
        UserEmailInput.classList.remove("is-invalid");
        return true
    }else{
        
        UserEmailInput.classList.remove("is-valid");
        UserEmailInput.classList.add("is-invalid");
        return false
    }
}

function valPassword(){
    var passwordPatern = /^[a-zA-Z0-9]{1,}$/;
    if(passwordPatern.test(userPasswordInput.value) == true){
        
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        return true
    }else{
        userPasswordInput.classList.remove("is-valid");
        userPasswordInput.classList.add("is-invalid");
        return false
    }
}

function isInputsValid(){
    if( valUserName() && valEmail() && valPassword() ){
        return true
    }else{
        return false
    }
}

function isExite(){
    for(var i = 0 ; i < allUsers.length ; i++){
        if(allUsers[i].name.toLowerCase() == userNameInput.value.toLowerCase() ||
        allUsers[i].email.toLowerCase() == UserEmailInput.value.toLowerCase()
        ){
            return true
        }
    }
    return false
}

function isImpty(){
    if( userNameInput.value =="" || UserEmailInput.value == "" || userPasswordInput == ""){
        return false
    }else{
        return true
    }
}