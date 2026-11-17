export default class Circle {
    constructor(props = {}) {
        this.fill = props.fill || false;
        this.stroke = props.stroke || "cyan";
        this.strokeWeight = props.strokeWeight || 2;
        this.radio = props.radio || 10;
        this.x = props.x || 50;
        this.y = props.y || 40;
        this.alpha = props.alpha || 255;
        this.speed_x = props.speed_x || 1;
        this.speed_y = props.speed_y || 1;
    }

    resize () {
        this.radio = random(10, 50);
    }

    move() {
        this.x += this.speed_x;
        this.y += this.speed_y;
    }

    update(p) {
        this.move();
        this.checkEdges();
        this.draw(p);
    }

    checkEdges() {
        if (this.x < -this.radio) {
            this.x = window.innerWidth + this.radio;
        } else if (this.x > window.innerWidth + this.radio) {
            this.x = this.radio;
        }
        if (this.y < -this.radio) {
            this.y = window.innerHeight + this.radio;
        } else if (this.y > window.innerHeight + this.radio) {
            this.y = this.radio;
        }
    }

    draw(p) {
        if (this.fill)
            { p.fill(this.fill); 
        } else {
            p.noFill(); }
        if (this.stroke) { p.stroke(this.stroke); }
        else { p.noStroke(); }
        p.strokeWeight(this.strokeWeight);
        p.circle(this.x, this.y, this.radio);
    }
}