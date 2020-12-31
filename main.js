const load1 = document.querySelector('.load-game1');
const load2 = document.querySelector('.load-game2');
const load3 = document.querySelector('.load-game3');
const load4 = document.querySelector('.load-game4');
const load5 = document.querySelector('.load-game5');
const load6 = document.querySelector('.load-game6');

var localName = '';

function endGame () {
    load2.classList.add("no-loaded");
    load3.classList.add("no-loaded");
    load4.classList.add("no-loaded");
    load5.classList.add("no-loaded");
    load1.classList.remove("no-loaded");
}

function startGo() {
    localName = (document.getElementById ('yourName')).value;
    if ( localName === "Marina" || localName === "Марина" || localName === "Maruna" || localName === "marina" || localName === "марина" || localName === "maruna") {
        load1.classList.add("no-loaded");
        load2.classList.remove("no-loaded");
    } else {
        load1.classList.add("no-loaded");
        load4.classList.remove("no-loaded");
    }
}
function startGo2() {
    load2.classList.add("no-loaded");
    load3.classList.remove("no-loaded");
}

function startGo3() {
    load3.classList.add("no-loaded");
    load5.classList.remove("no-loaded");
}
function startGo4() {
    load5.classList.add("no-loaded");
    load6.classList.remove("no-loaded");
}