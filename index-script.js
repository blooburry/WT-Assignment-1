function validateForm() {
  const userID = document.getElementById("userID").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const zipcode = document.getElementById("zipcode").value;
  const email = document.getElementById("email").value;
  
  if (!/^[A-Z]/.test(userID) || !/[0-9|!@#\$%\^&\*]$/.test(userID) || userID.length < 5 || userID.length > 12) {
    alert("Invalid User ID. Must start with a capital letter, be between 5 and 12 characters long, and end with a number or special character.");
    return false;
  }
  
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password) || password.length < 12) {
    alert("Invalid password. Must be at least 12 characters long, contain a combination of uppercase letters, lowercase letters, numbers, and symbols, and cannot be a word that can be the name of a person.");
    return false;
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
        alert("Invalid name.It must contain the alphabet only.");
        return false;
        }
        
        if (!/^[0-9]{4}[A-Za-z]{2}$/.test(zipcode)) {
        alert("Invalid ZIP code. it must be a valid Netherlands postal code, consisting of four numbers and two letters.");
        return false;
        }
        
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(email)) {
        alert("Invalid email ID.");
        return false;
        }
        
        if (document.getElementById("sex").value == "") {
        alert("Sex is required.");
        return false;
        }
        
        if (document.getElementById("language").value == "") {
        alert("Language is required.");
        return false;
        }
        
        if (document.getElementById("country").value == "") {
        alert("Country is required.");
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
