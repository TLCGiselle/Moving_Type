let font;
let points = []; let msg = "SQUISHY GRIP"
let size = 100;
let r = 15; let angle = 0;
let t = 0;


function preload() {
  font = loadFont("Kanit-Black.ttf");

}

function setup() {
  createCanvas(1000, 400);
  points = font.textToPoints(msg, 0, 0, size, { 
    sampleFactor:0.5,
    simplifyThreshold:0.0

  });
  angleMode(DEGREES);
}

function draw() {
  background('purple');
  //color changing animation
  let hue = map(sin(angle*0.1),-1,1,0,255);
  background(hue,255,255);
  stroke(255)
  let x = r *cos(angle);
  let y = r *sin(angle);
  translate(20, 300);
  for (let i = 0; i < points.length; i++) {
    line(points[i].x, points[i].y,points[i].x + x,points[i].y + y);
  }
fill(255,100)
textFont(font);
textSize(size);
text(msg,x,y);

  let increment= 3*sin(t);
  t++;
  angle +=increment;
}

