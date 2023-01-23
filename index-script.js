function dynamicallyCreatedHTML(){
    generateTable();
}

function showForm(){
    document.getElementById("login-form").style.display = "flex";

    startTimer();
}
function expandForm(){
    document.getElementsByClassName("registration")[0].style.display = "block";
    document.getElementById("address-field").required = true;
    document.getElementById("country-field").required = true;
    document.getElementById("zipcode-field").required = true;
    document.getElementById("email-field").required = true;
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