let elt = document.getElementById('canvas'); // Keep this, important!!!!!

function setup() {
  let cnv = createCanvas(700, 700);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!
}

// Run this every frame of the sketch
function draw() 

{background(50);//change the color of background
  
  circle(300,300,70)// create a face
  
  strokeWeight(20);
  stroke(255);
  line(250,300,350,280);
  rect(268,240,55,40,5);//create a heat
  
  rect(280,360,50,110)//create a body

line(300,350,268,240)
line(200,300,300,400)
  line(200,300,370,430)
line(330,480,400,550)
line(285,480,290,580)//dancing limbs
  
}

// below you can add your own functions