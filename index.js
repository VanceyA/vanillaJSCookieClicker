let score = 0;

let scoreDisplay = document.querySelector("#score");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addCookie() {
    score++;
    scoreDisplay.innerHTML = `Score: ${score}`;
}