const URL = "./tm-model/"

let model, webcam, maxPredictions, pongGame
let labelContainer = document.getElementById("label-container")

let predictUP = false
let predictDOWN = false

async function init() {
    const modelURL = URL + "model.json"
    const metadataURL = URL + "metadata.json"

    model = await tmImage.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    const flip = true // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip) // width, height, flip
    await webcam.setup() // request access to the webcam
    await webcam.play()

    // show webcam for debugging
    document.getElementById("webcam-container").appendChild(webcam.canvas)

    // create game here so we know everything is defined
    new Game()

    // start the prediction loop
    requestAnimationFrame(predictLoop)
}

async function predictLoop() {
    webcam.update()
    await predict()
    window.requestAnimationFrame(predictLoop)
}

// run the webcam image through the image model
async function predict() {
    const prediction = await model.predict(webcam.canvas)

    predictUP = false
    predictDOWN = false

    if (prediction[0].probability > 0.8) {
        predictUP = true
    } else if (prediction[1].probability > 0.8) {
        predictDOWN = true
    }

    labelContainer.innerHTML = `UP---${predictUP}<br>DOWN-${predictDOWN}` 
}

init()