let elt = document.getElementById('canvas'); // Keep this, important!!!!!

let x = 30;
let y = 30;
let r = 50;
let direction = 6;

function setup() {
  let cnv = createCanvas(900, 600);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!

  
}

function draw() {
  background(51);
  push()
  noStroke();
  fill('red');
  circle(x, y, r);
  pop();
  if(x<900-r/2 && x>r/2) {
    x += direction;
  }
  else if(x >= 900 - r/2 || x <= r/2) {
    direction = direction * -1;
    x += direction;
  }

}
