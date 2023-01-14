function dynamicallyCreatedHTML(){
    generateTable();
}

var currentSection = "home";

function updateSection(section){
    let el0;

    switch (currentSection){
        case "home":
            document.getElementsByClassName("section")[0].style.display = "none";
            el0 =  document.getElementsByClassName("header-container")[0].childNodes[3];
            break;
        case "profile":
            document.getElementsByClassName("section")[1].style.display = "none";
            el0 = document.getElementsByClassName("header-container")[0].childNodes[5];
            break;
        case "mentors":
            document.getElementsByClassName("section")[2].style.display = "none";
            el0 = document.getElementsByClassName("header-container")[0].childNodes[7];
            break;
    }
    el0.style.backgroundColor = "";
    el0.style.color = "";

    let el1;
    switch (section){
        case "home":
            document.getElementsByClassName("section")[0].style.display = "block";
            el1 = document.getElementsByClassName("header-container")[0].childNodes[3];
            break;
        case "profile":
            document.getElementsByClassName("section")[1].style.display = "block";
            el1 = document.getElementsByClassName("header-container")[0].childNodes[5];
            break;
        case "mentors":
            document.getElementsByClassName("section")[2].style.display = "block";
            el1 = document.getElementsByClassName("header-container")[0].childNodes[7];
            break;
    }
    el1.style.backgroundColor = "rgb(30, 166, 166)";
    el1.style.color = "white";
    currentSection = section;
}

function showForm(){
    document.getElementById("#form").style.display = "flex";
}
function expandForm(){
    document.getElementsByClassName("registration")[0].style.display = "block";
}
function closeForm(){
    document.getElementById("#form").style.display = "none";
    document.getElementsByClassName("registration")[0].style.display = "none";
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