class Game {
    
    constructor() {
        console.log("Game created")
        // here we make a ball and a paddle, and add them to the window using document.body.appendChild

        // here you call the update method for the first time, to start the game loop!
    }

    update() {
        console.log("Game loop called!")

        // here we have to update the ball and the paddle

        // here we have to check if the ball hits the paddle

        // and finally call the update function again, so it keeps looping!
        requestAnimationFrame(() => this.update())
    }


    // this is a helper function to see if two rectangles hit each other
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
    
} 

// start the game!
//new Game()