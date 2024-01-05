const dateTimeData = document.querySelector(".date-time-data");
const clockFace = document.querySelector(".clock-face");
const secArrow = document.querySelector(".sec-arrow");
const minArrow = document.querySelector(".min-arrow");
const hourArrow = document.querySelector(".hour-arrow");

arrowAnimationData = setInterval(arrowAnimationFunction, 1000);

let clockDigits = "";
let clockMarkings = "";

for (let digits = 1; digits <= 12; digits += 1) {
    clockDigits +=
    `<div class="clock-digit-container" style="transform: rotate(${30 * digits}deg);">
        <div class="clock-digit" style="transform: rotate(${-30 * digits}deg);">${digits}</div>
    </div>`;
}

for (let markings = 1; markings <= 60; markings += 1) {
    clockMarkings +=
    `<div class="clock-marking-container" style="transform: rotate(${6 * markings}deg);">
        <div class="clock-marking"></div>
    </div>`;
}

clockFace.insertAdjacentHTML("afterbegin", clockDigits);
clockFace.insertAdjacentHTML("afterbegin", clockMarkings);

function arrowAnimationFunction() {
    let date = new Date();
    let seconds = date.getUTCSeconds();
    let minutes = date.getUTCMinutes();
    let hours = date.getUTCHours() + 3;
    if (hours >= 24) hours -= 24;
    hourArrow.style.transform = `rotate(${hours % 12 * 30}deg)`;
    minArrow.style.transform = `rotate(${minutes * 6}deg)`;
    secArrow.style.transform = `rotate(${seconds * 6}deg)`;
    dateTimeData.textContent = date;
}