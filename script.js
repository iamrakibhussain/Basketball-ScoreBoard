let homedisplay = document.getElementById("homescorebox")
let guestdisplay = document.getElementById("guestscorebox")
let seconds = document.getElementById("seconds")
let minutes= document.getElementById("minutes")
let hours=document.getElementById("hours")
let counth = 0
let countg = 0
let hour = 0
let minute = 0
let second = 0

function updatetimer() {
    second++
    if (second === 60) {
        
        second = 0
        minute++
    }
    if(minute===60){
        minute=0
        hour++
    }
    seconds.textContent=second <10 ? "0"+second:second
    minutes.textContent=minute <10 ? "0"+minute:minute
    hours.textContent=hour < 10 ?"0"+hour:hour


}
setInterval(updatetimer, 1000);

function homescore1() {
    counth += 1
    homedisplay.textContent = counth
}
function homescore2() {
    counth += 2
    homedisplay.textContent = counth
}
function homescore3() {
    counth += 3
    homedisplay.textContent = counth
}
function guestscore1() {
    countg += 1
    guestdisplay.textContent = countg
}
function guestscore2() {
    countg += 2
    guestdisplay.textContent = countg
}
function guestscore3() {
    countg += 3
    guestdisplay.textContent = countg
}

