// Game Constants

let direction = { x: 0, y: 0 };
const foodSound = new Audio('../music/food.mp3');
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const musicSound = new Audio('../music/music.mp3');

// Game Functions

function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
}



// Main Logic Starts here
window.requestAnimationFrame(main);