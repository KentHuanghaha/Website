let elt = document.getElementById('canvas'); // Keep this, important!!!!!

let BigRadius = 50;
let BigBallCount = 35
let SmallRadius = 30
let SmallBallCount = 25
let BigBalls = []
let SmallBalls = []

function setup() {
  let cnv = createCanvas(600, 400);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!

  strokeWeight(5);

  for (let i = 0; i < BigBallCount; i++) {
    let b = new BigBall(random(width), random(height));
    BigBalls.push(b);
  }
  
}

function draw() {
  push();
  background(246, 255, 217);
  noStroke();
  pop();

  for (let i = 0; i < BigBallCount; i++) {
    BigBalls[i].render();
    BigBalls[i].move();
  }
}

// below you can add your own functions
class BigBall {
  constructor(initialX, initialY) {
    this.x = initialX;
    this.y = initialY;
    this.px = initialX;
    this.py = initialY;
    this.clr = color(random(100, 150), random(200, 250), random(210, 260), 100);
  }

  render() {
    stroke(this.clr);
    line(this.x, this.y, this.px, this.py);
  }

  move() {
    this.px = this.x;
    this.py = this.y;

    let rx = random(-10, 10);
    let ry = random(-10, 10);

    this.x += rx
    this.y += ry;

  }
}
