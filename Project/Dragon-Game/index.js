var score = 0;
var cross = true;

audio = new Audio('/audio/music.mp3');
audiogo = new Audio('/audio/gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e) {
    // console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    } else if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    } else if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    // Convert pixel value to integer
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));

    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    // console.log("Dino value: ", dx, dy);
    // console.log("Obstcale value: ", ox, oy)

    offsetX = Math.abs(dx - ox);
    // console.log("offsetX value:", offsetX);
    offsetY = Math.abs(dy - oy);
    // console.log("offsetY value:", offsetY)

    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
    } else if (offsetX < 145 && cross) {
        score += 1
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
            console.log(cross);
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.8;
            obstacle.style.animationDurtaion = newDur + 's';
            console.log("New animation duration", newDur);
        }, 500);
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}