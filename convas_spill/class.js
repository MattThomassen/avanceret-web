

class Game {
    constructor(color) {
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.ball = new Ball(color);
        this.paddle = new Paddle();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.drawBall(this.ctx);
        this.paddle.drawPaddle(this.ctx);

        if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
            this.ball.dx *= -1;
        }

        if (this.ball.y + this.ball.dy < this.ball.radius) {
            this.ball.dy *= -1;
            //this.ball.dy = -this.ball.dy;

        } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
        }

        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
    }

    play() {
        setInterval(() => this.draw(), 10);
    }

}

class Ball {
    constructor(color, speed) {
        //Her er properties
        this.radius = 10;
        this.x = Math.floor(Math.random() * 950);
        // this.x = 100;
        this.y = 470;
        this.dx = 2;
        this.dy = -2;
        // this.speed = 30;
        this.color = color;
    }


    drawBall(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

}

class Paddle {
    constructor() {
        this.paddleHeight = 6;
        this.paddleWidth = 100;
        this.paddleX = 10;
        this.rightPressed = false;
        this.leftPressed = false;  
        this.keyDownHandler = () => {
            if (e.keyCode == 39) {
                this.rightPressed = true;
            }
            else if (e.keyCode == 37) {
                this.leftPressed = true;
            }
        } 

        this.keyUpHandler = () => {
            if (e.keyCode == 39) {
                this.rightPressed = false;
            }
            else if (e.keyCode == 37) {
                this.leftPressed = false;
            }
        }
        this.setEventHandlers();
    }

    setEventHandlers() {
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);
    }

    drawPaddle(ctx) {
        ctx.beginPath();
        ctx.rect(this.paddleX, ctx.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleWidth);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.closePath();
    }

    
}

let game = new Game(true);
game.play();
// console.log(game.ball);



























    //Efter kommer methods    
    // setSpeed(level) {
    //     switch (level) {
    //         case 1: this.speed = 20; this.dx = 1; this.dy = -1; break;
    //         case 2: this.speed = 10; this.dx = 1; this.dy = -1; break;
    //         case 3: this.speed = 10; this.dx = 2; this.dy = -2; break;
    //         case 4: this.speed = 10; this.dx = 4; this.dy = -4; break;
    //         case 5: this.speed = 5; this.dx = 4; this.dy = -4; break;
    //         default: this.speed = 10; this.dx = 2; this.dy = -2; break;

    //     }
    // }