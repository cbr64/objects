import Circle from './components/Circle.js';

const STARS_COUNTER = 32;
let stars = [];
let fft, song;

new p5((p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < STARS_COUNTER; i++) {
            stars.push(new Circle({
                x: Math.random() * p.windowWidth,
                y: Math.random() * p.windowHeight,
                fill: "white",
                stroke: "white",
                radio: Math.random() * 3 + 5,
                speed_x: Math.random() - 0.5,
                speed_y: Math.random() - 0.5,
            }));
        }
    };

    p.draw = () => {
        p.background(0);
        for (const star of stars) {
            star.update(p);
        }
    };
});