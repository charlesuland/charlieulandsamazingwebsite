


class RPSGame {
    state = 0;
    playerWins = 0;
    cpuWins = 0;
    constructor() {

    }

    weaponClicked(weapon) {
        const cpuWeapon = Math.floor(Math.random() * 3) +1;
        //animatePlayer(weapon);
        //animateCPU(cpuWeapon);

        if (cpuWeapon === weapon) {

        } else if (cpuWeapon === 1 && weapon === 2) {
            this.increasePlayerWins();
        } else if (cpuWeapon === 1 && weapon === 3) {
            this.increaseCPUWins();
        } else if (cpuWeapon === 2 && weapon === 1) {
            this.increaseCPUWins();
        } else if (cpuWeapon === 2 && weapon === 3) {
            this.increasePlayerWins();
        } else if (cpuWeapon === 3 && weapon === 1) {
            this.increasePlayerWins();
        } else if (cpuWeapon === 3 && weapon === 2) {
            this.increaseCPUWins();
        }
    }

    increaseCPUWins() {
        this.cpuWins++;
        const winText = document.getElementById("cpu-win-cnt");
        winText.innerText = "" + this.cpuWins;
    }

    increasePlayerWins() {
        this.playerWins++;
        const winText = document.getElementById("player-win-cnt");
        winText.innerText = "" + this.playerWins;
    }

}







const canvas = document.getElementById("player-hand");
const canvas2 = document.getElementById("cpu-hand");
const ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let circleRadius = 70;
ctx.lineWidth = 8;
ctx.beginPath();
ctx.arc(canvasWidth / 2, canvasHeight / 2, circleRadius, 0, Math.PI * 2);
ctx.strokeStyle = "#B1D4E0";
ctx.stroke();

const ctx2 = canvas2.getContext("2d");
ctx2.lineWidth = 8;
ctx2.beginPath();
ctx2.arc(canvasWidth / 2, canvasHeight / 2, circleRadius, 0, Math.PI * 2);
ctx2.strokeStyle = "#B1D4E0";
ctx2.stroke();

const buttonRock = document.getElementById("button1");
const buttonPaper = document.getElementById("button2");
const buttonScissors = document.getElementById("button3");
const game = new RPSGame();
buttonRock.onclick = () => game.weaponClicked(1);
buttonPaper.onclick = () => game.weaponClicked(2);
buttonScissors.onclick = () => game.weaponClicked(3);
