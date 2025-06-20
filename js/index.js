


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







const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const buttonRock = document.getElementById("button1");
const buttonPaper = document.getElementById("button2");
const buttonScissors = document.getElementById("button3");
const game = new RPSGame();
buttonRock.onclick = () => {
    game.weaponClicked(1);
}
buttonPaper.onclick = () => {
    game.weaponClicked(2);
}
buttonScissors.onclick = () => {
    game.weaponClicked(3);
}
