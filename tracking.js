let startDate = new Date();
let totalTime = 0;

let numberOfClicks = 0;

let numberOfKeypresses = {
    "username-field": 0,
    "password-field": 0,
    "address-field": 0,
    "zipcode-field": 0,
    "email-field": 0,
    "bio-field": 0
};

let charactersPerField = {
    "username-field": 0,
    "password-field": 0,
    "address-field": 0,
    "zipcode-field": 0,
    "email-field": 0,
    "bio-field": 0
}

function startTimer(){
    startDate = new Date();
}

function endTimer(){
    const endDate = new Date();
    const timeSpent = endDate.getTime() - startDate.getTime();
    totalTime += timeSpent;

    document.getElementById("total-time-spent").innerHTML = timeSpent;
}

document.getElementById("login-form").addEventListener("click", ()=>{
    numberOfClicks++;
    document.getElementById("number-of-clicks").innerHTML = numberOfClicks;
});

document.getElementById("login-form").addEventListener("keydown", (event)=>{
    numberOfKeypresses[event.target.id]++;
    document.getElementById("keypresses-per-field").innerHTML 
    = Object.entries(numberOfKeypresses).map(([k, v])=>(`${k}: ${v}`)).join('\n');

    setTimeout(()=>{
        charactersPerField[event.target.id] = [event.target.value.length];
        document.getElementById("chars-per-field").innerHTML 
        = Object.entries(charactersPerField).map(([k, v])=>(`${k}: ${v}`)).join('\n');
    }, 100);
});