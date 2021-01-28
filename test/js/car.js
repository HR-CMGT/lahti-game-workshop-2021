class Car extends HTMLElement {
    constructor(){
        super()
        console.log("there actually IS a car 😎")
        this.id = Math.random() * 10000
        this.speed = Math.random() * 5 // 0 - 4
        this.x = 0
        this.y = Math.random() * window.innerHeight
    }

    update(){
        this.x += this.speed 
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}

window.customElements.define("car-component", Car)