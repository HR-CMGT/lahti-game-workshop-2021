class Paddle extends HTMLElement {

    constructor() {
        super()

        this.downSpeed = 0
        this.upSpeed = 0
        this.x      = 20
        this.y      = 200
    }

    update() {
        this.upSpeed = this.downSpeed = 0
        if (predictUP) {
            this.upSpeed = 5
        } else if (predictDOWN) {
            this.downSpeed = 5
        } 

        let newY = this.y + (this.downSpeed - this.upSpeed)
        if(newY > 0 && newY < window.innerHeight - 100) {
            this.y = newY
        }
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    
}

window.customElements.define("paddle-component", Paddle)