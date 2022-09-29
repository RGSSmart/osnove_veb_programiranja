var params = window.location.search;
var urlParams = new URLSearchParams(params);
var user = {
    name: urlParams.get('name'),
    surname: urlParams.get('surname'),
    password: urlParams.get('password')
}

var statusDiv = document.getElementById("status");
statusDiv.innerHTML = "<h3> Uspesno registrovani korisnik <b>" + user.name + " "+ user.surname + "</b></h3>";

if (params != "")
    document.getElementById("bar").hidden = true;
else
    document.getElementById("bar").hidden = false;