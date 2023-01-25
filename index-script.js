const userIDRegex = /^[A-Z][a-zA-Z0-9]{4,11}[0-9|!@#\$%\^&\*]$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=^.{12,}$).*$/;
const nameRegex = /^[a-zA-Z]+$/;
const zipcodeRegex = /^[0-9]{4}[A-Za-z]{2}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

function validateForm() {
let userID = document.getElementById("userID").value;
let password = document.getElementById("password").value;
let name = document.getElementById("name").value;
let zipcode = document.getElementById("zipcode").value;
let email = document.getElementById("email").value;

if (!userIDRegex.test(userID)) {
alert("Invalid User ID. Must start with a capital letter, be between 5 and 12 characters long, and end with a number or special character.");
return false;
}

if (!passwordRegex.test(password)) {
alert("Invalid password. Must be at least 12 characters long, contain a combination of uppercase letters, lowercase letters, numbers, and symbols, and cannot be a word that can be the name of a person.");
return false;
}

if (!nameRegex.test(name)) {
alert("Invalid name. Must contain the alphabet only.");
return false;
}

if (!zipcodeRegex.test(zipcode)) {
alert("Invalid ZIP code. Must be a valid Netherlands postal code, consisting of four numbers and two letters.");
return false;
}

if (!emailRegex.test(email)) {
alert("Invalid email ID.");
return false;
}

if (document.getElementById("sex").value == "") {
alert("Sex field is required.");
return false;
}

if (document.getElementById("language").value == "") {
alert("Language field is required.");
return false;
}

if (document.getElementById("country").value == "") {
alert("Country field is required.");
return false;
}

return true;
}


function dynamicallyCreatedHTML(){
    generateTable();
}

function showForm(){
    document.getElementById("login-form").style.display = "flex";

    startTimer();
}
function expandForm(){
    document.getElementsByClassName("registration")[0].style.display = "block";
    
}
function closeForm(ignoreValidation){
    let el = document.getElementById("login-form");
    if(!ignoreValidation && !el.checkValidity()) return;
    el.style.display = "none";
    document.getElementsByClassName("registration")[0].style.display = "none";

    endTimer();
}
function generateTable(){
    let el = document.getElementById("availability-table").childNodes[1];
    let newBody = "";
    let style = "";
    for(i=0; i <= 24; i++){
        for(j=1; j<= 7; j++){
            style = "style = 'background-color: "+ ((Math.random() < 0.5)? "rgba(255, 0, 0, 0.7)" : "rgba(0, 255, 0, 0.7)") +";'";
            newBody += "<td " + style + "> " + i.toString().padStart(2, "0") + ":00 </td>";
        }
        el.insertAdjacentHTML("beforeend", "<tr>" + newBody + "</tr>");
        newBody = "";
    }
}

function highlightHeader(id){
    let map = {
        "home": 3,
        "profile": 5,
        "mentors": 7
    };
    let newEl = document.getElementsByClassName("header-container")[0].childNodes[map[id]];
    newEl.style.backgroundColor = "rgb(30, 166, 166)";
    newEl.style.color = "white";
    delete map[id]
    let oldEl;
    for(key in map){
        oldEl = document.getElementsByClassName("header-container")[0].childNodes[map[key]]
        oldEl.style.backgroundColor = "";
        oldEl.style.color = "rgb(30, 166, 166)";
    }
}