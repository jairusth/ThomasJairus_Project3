
var img;
function preload() {
	img = loadImage("images/wood.jpg")
}

function setup() {
createCanvas(480, 320);
}

function draw() {
background(0);
  
fill(250)
ellipse(220, 120,120, 100);
  
fill(0)
ellipse(190, 120, 20);

ellipse(250, 120, 20);
line(240, 120, 200, 120);
  
fill(250)
ellipse(220,305, 250, 270);
  
  
fill(250)
ellipse(360, 210, 90, 150)
  
ellipse(360, 120, 20, 30)
ellipse(390, 140, 20, 30)
}