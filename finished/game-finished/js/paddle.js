class Paddle extends HTMLElement {

    constructor() {
        super()

        this.downSpeed = 0
        this.upSpeed = 0
        
        this.x      = 20
        this.y      = 200
        
        window.addEventListener("keydown", (e) => this.onKeyDown(e))
        window.addEventListener("keyup", (e) => this.onKeyUp(e))
    }

    onKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                this.upSpeed = 5
                break
            case "ArrowDown":
                this.downSpeed = 5
                break
        }
    }

    onKeyUp(e) {
        switch (e.key) {
            case "ArrowUp":
                this.upSpeed = 0
                break
            case "ArrowDown":
                this.downSpeed = 0
                break
        }
    }

    update() {
        this.y += (this.downSpeed - this.upSpeed)
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    
}

window.customElements.define("paddle-component", Paddle)