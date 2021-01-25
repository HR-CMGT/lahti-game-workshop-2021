class Game {
    
    constructor() {
        this.ball = new Ball()
        this.paddle = new Paddle()

        document.body.appendChild(this.ball)
        document.body.appendChild(this.paddle)

        this.update()        
    }

    update() {
        this.ball.update()
        this.paddle.update()

        // ball hits paddle
        if (this.checkCollision(this.ball.getBoundingClientRect(), this.paddle.getBoundingClientRect())) {
            this.ball.hitPaddle()
        }

        // ball leaves the screen on the left
        if (this.ball.getBoundingClientRect().left < -50) {
            console.log("GAME OVER")
        } else {
            requestAnimationFrame(() => this.update())
        }
    }

    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
    
} 


new Game()