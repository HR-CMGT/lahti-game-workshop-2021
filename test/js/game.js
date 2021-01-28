class Game {
    constructor(){
        this.cars = []
        this.winner = undefined
        for(let i = 0; i < 10; i++) {
            let c = new Car()
            document.body.appendChild(c)
            this.cars.push(c)
        }
        this.update()
    }

    update(){
        for(let car of this.cars){
            car.update()
            if (car.x > window.innerWidth && !this.winner) {
                this.winner = car
                console.log(`Car with id ${car.id} is the winner!!!!`)
            }
        }
        requestAnimationFrame(()=>this.update())
    }
}

let myFirstGame = new Game()

