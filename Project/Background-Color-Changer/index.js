var color = ["#8cabff", "#32CD32", "#FF4500", "#4682B4", "#DA70D6"];
var i = 0;
document.querySelector("button").addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
})