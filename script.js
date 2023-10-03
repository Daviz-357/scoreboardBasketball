let homeCount = 0;
let guestCount = 0;

function updateCount(){
    let home = document.getElementById("score-home");
    home.textContent = homeCount;

    let guest= document.getElementById("score-guest");
    guest.textContent = guestCount;
}

function plus1H() {
    homeCount += 1;
    updateCount();
}

function plus2H() {
    homeCount += 2;
    updateCount();
}

function plus3H() {
    homeCount += 2;
    updateCount();
}

function resetH() {
    homeCount = 0;
    updateCount();
}


function plus1G() {
    guestCount += 1;
    updateCount();
}

function plus2G() {
    guestCount += 2;
    updateCount();
}

function plus3G() {
    guestCount += 2;
    updateCount();
}

function resetG() {
    guestCount = 0;
    updateCount();
}