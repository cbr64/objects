export default class Circle {
    constructor() {
        this.fill = false;
        this.stroke = "cyan";
        this.strokeWeight = 2;
        this.radio = random(10, 50);
        this.x = random(0, 100);
        this.y = random(0, 100);
        this.alpha = random(0, 255);
    }

    resize () {
        this.radio = random(10, 50);
    }

    draw () {
        fill(this.color);
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        circle(this.x, this.y, this.radio);
    }
}