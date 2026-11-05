// main.js

let divs = document.querySelectorAll(".grid-container div");

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

function randomize() {
    console.log(divs.length, "randomize!");
    divs.forEach(function(div){
        let scale = randomNumber(0.5, 3);
        let translateX = randomNumber(-100, 100);
        let translateY = randomNumber(-20, 20);
        let rotate = randomNumber(-100, 100);

        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomNumber(0,80);
            translateY = randomNumber(0, 80);
        }
        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

    });
}

document.addEventListener("click", randomize);