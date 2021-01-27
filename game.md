# Browser game with HTML, CSS and Custom Elements

We'll open the `test` folder and play around with the following concepts:

- Classes in ES6
- Custom elements
- Visualising game elements
- Animation and game loop

<br>
<br>

## Classes in ES6

A class is a way to group variables and functions into a reusable object. Note that the `constructor` function and other methods don't need the `function` keyword.

Use `new` to create instances of the class.

```javascript
class Car {
    constructor(){
        console.log("Created a car!")
        this.speed = 10
        this.drive()
    }
    drive(){
        console.log("Vroooom")
    }
}
let c = new Car()
```
<br>
<br>

## What are Custom Elements?

A custom element uses class notation to add javascript code to a **HTML element**. We need `customElements.define` to tell the browser that this class is a HTML Element.

```javascript
class Car extends HTMLElement {
    constructor(){
        super()
        console.log("Car created")
    }
}
window.customElements.define("car-component", Car)
```
Now, we can add one or more car elements to the HTML. You will see the log message in the console!
```html
<body>
    <car-component></car-component>
    <car-component></car-component>
</body>
```
We can also add and remove an element by code:
```javascript
let car = new Car()
document.body.appendChild(car)
car.remove()
```
Because the CAR is a HTML element, you can access it's element properties using `this`.

```javascript
class Car extends HTMLElement {
    constructor(){
        super()
        this.style.backgroundColor = "red";
        this.innerHTML = "Hello"
    }
}
```

- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

<br>
<br>

## Visualising game elements

We make the car visible as a game element using CSS. Give the element a size, block display, and background image. 

```css
car-component {
    position: absolute;
    display: block;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-image: url(./images/car.png);
    width: 168px;
    height: 108px;
}
```
We position and animate the elements using `transform`, because this uses the GPU and has great performance.

```css
car-component {
    transform:translate(100px, 200px);
}
```
We can also set the transform using javascript
```javascript
this.style.transform = `translate(100px, 200px)`
```

<Br>
<br>

## Animation and game loop

We can animate a component by updating it's position 60 times per second. We do this by creating a **Game Loop** with `requestAnimationFrame`:

```javascript
class Car extends HTMLElement {
    constructor(){
        super()
        this.x = 100
        this.y = 200
    }
    update(){
        console.log("updating 1 frame")
        this.x ++
        this.y ++
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
        requestAnimationFrame(()=>this.update())
    }
}
```
### Try it out

Try this out by adding multiple cars to your game, and giving them a **random position and speed!** Can you use an `if statement` to reset the position when the car leaves the screen?

```javascript
this.speed = Math.random() * 4
```

### Main game file

In the next part of the workshop, we'll use one single game loop to update all the game elements. This will give better performance and control, compared to each element having its own game loop.