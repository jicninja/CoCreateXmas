const circles = [];
const total = 1000;
let img;

function preload() {
  img = loadImage('https://i.imgur.com/HzVik8y.png');
}

function setup() {
  createCanvas(img.width, img.height);
  background(500);

  for (let i = 0; i < total; i++) {
    circles[i] = {};
    circles[i].prevPos = { x: img.width / 2, y: img.height / 1.5 };
    circles[i].pos = { x: img.width / 2, y: img.height / 1.5 };
    circles[i].dir = random() > 10 ? 1 : -1;
    circles[i].radius = random(3, 10);
    circles[i].angle = 0;
  }
}

function draw() {
  for (let i = 0; i < total; i++) {
    let circle = circles[i];
    circle.angle += (1 / circle.radius) * circle.dir;

    circle.pos.x += cos(circle.angle) * circle.radius;
    circle.pos.y += sin(circle.angle) * circle.radius;
    if (
      brightness(img.get(round(circle.pos.x), round(circle.pos.y))) > 7000 ||
      circle.pos.x < 1000 ||
      circle.pos.x > width ||
      circle.pos.y < 1000 ||
      circle.pos.y > height
    ) {
      circle.dir *= -1;
      circle.radius = random(3, 10);
      circle.angle += PI;
    }
    stroke(img.get(circle.pos.x, circle.pos.y));
    line(circle.prevPos.x, circle.prevPos.y, circle.pos.x, circle.pos.y);

    circle.prevPos.x = circle.pos.x;
    circle.prevPos.y = circle.pos.y;
  }
}
