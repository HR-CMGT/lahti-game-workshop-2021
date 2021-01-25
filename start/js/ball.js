class Ball extends HTMLElement {

    constructor() {
        super()

        this.x = window.innerWidth - 50
        this.y = Math.random() * (window.innerHeight - 100)

        this.speedX = -3 - (Math.random() * 6)
        this.speedY = Math.random() * 6 - 3

        this.update()
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

        if (this.x + 50 > window.innerWidth || this.x < 0) {
            this.speedX *= -1
        } 
                        
        this.style.transform = `translate(${this.x}px, ${this.y}px)`

        // this is only for the introduction to web components
        // requestAnimationFrame(() => this.update())
    }
}

window.customElements.define("ball-component", Ball)