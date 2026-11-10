import Circle from './components/Circle.js';

const CIRCLE = new Circle();

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    CIRCLE.draw();
}