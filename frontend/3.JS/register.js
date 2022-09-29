var params = window.location.search;
var urlParams = new URLSearchParams(params);
var user = {
    name:urlParams.get('name'),
    surname :urlParams.get('surnname'),
    password :urlParams.get('password')
}

var submitButton = document.getElementById("submit");
var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");

// Event koji ce se desiti kad god se promeni fokus sa username polja.
// Koristiti za validaciju unetih podatka.
usernameField.addEventListener('change' , ()=>{
    
    if(usernameExists( usernameField.value) || isPasswordValid(passwordField.value)){
        submitButton.disabled = true;
    }else{
        submitButton.disabled = false;
    }
})
function isPasswordValid( password){
 // Implementirati logiku validnosti sifre
    return false;
}
// Metoda koja proverava da li postoji prosledjeni username u nizu USERS.
function usernameExists( username ){
    var exist = false;
    USERS.forEach((el, index)=>{
        if( el.name == username){
            exist = true;
        }
    });

    return exist;
}