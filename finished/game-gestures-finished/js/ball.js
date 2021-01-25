class Ball extends HTMLElement {

    constructor() {
        super()
        this.startPosition()
    }

    startPosition(){
        this.x = window.innerWidth
        this.y = Math.random() * (window.innerHeight - 100)

        this.speedX = -3 - (Math.random() * 6)
        this.speedY = Math.random() * 6 - 3
    }
  
    hitPaddle(){
        this.speedX *= -1
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.y + this.getBoundingClientRect().height > window.innerHeight || this.y < 0) { 
            this.speedY *= -1
        }

        if (this.x > window.innerWidth) {
            this.speedX *= -1
        } 

        // auto restart
        if (this.x < -60) {
            this.startPosition()
        }
                        
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

window.customElements.define("ball-component", Ball)