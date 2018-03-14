var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var ballRadius2 = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var x2 = canvas.width/2;
var y2 = canvas.height-30;
var dx = 1;
var dy = -1;
var dx2 = 4;
var dy2 = -4;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBall2() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius2, 0, Math.PI*2);
    ctx.fillStyle = "#ffff";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}
function draw2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall2();
    
    if(x2 + dx2 > canvas.width-ballRadius || x2 + dx2 < ballRadius) {
        dx = -dx;
    }
    if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }
    
    x2 += dx2;
    y2 += dy2;
}

setInterval(draw, 10);