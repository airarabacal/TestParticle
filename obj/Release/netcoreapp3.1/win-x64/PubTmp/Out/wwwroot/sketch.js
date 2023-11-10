let particle;

function setup() {
    var w = 200, h = 3000
    createCanvas(w, h);

    particle = new Particle(
        createVector(1, 1), // position at the center of the window
        1, // velocity 
        color(255, 87, 120), // color
        100, // lifetime
        'rect', // shape
        createVector(200, 200), // size width and height
        255, // transparency from 0 to 255
        2, // force 
        w,
        h,
        10
    );
}

function draw() {
    background(0);
    particle.update();
    particle.render();
}