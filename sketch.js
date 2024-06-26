
let font;
let points = [];
let size = 100;
let r = 15;
let angle = 0;
let t = 0;
let hue = 0;
let mousepressed = false;
let bgColor;
let textColor;
let textStroke;
let startButton;
let resetButton;
let buttons = [];
let bgmusic;
let yOffset = 0;
let xOffest = 0;

var words = ['GM','Squishy Grip', 'SeaDog', 'Pochi','Hewie Rowan', 'Evanora','Habanero','Aurora'];
var index = 0;

function preload() {
  font = loadFont("SquishyGrip-Regular.ttf");
  bgmusic=loadSound('jellyfish jam (320 kbps).mp3')
}

function setup() {
  createCanvas(1000, 400);
  points = font.textToPoints(words[index], 0, 0, size, {
    sampleFactor: 0.5,
    simplifyThreshold: 0.0
  });
  angleMode(DEGREES);
  bgColor = color(150, 25, 255);
  textColor = color(255);
  textStroke = color(255);

  startButton = createButton('Start');
  startButton.position(250, 500);
  startButton.style('background-color', '#a83240');
  startButton.style('color', 'white');
  startButton.style('border', 'none');
  startButton.size(200, 40);
  startButton.mousePressed(startSketch);

  resetButton = createButton('Reset');
  resetButton.position(800, 500);
  resetButton.style('background-color', '#a83240');
  resetButton.style('color', 'white');
  resetButton.style('border', 'none');
  resetButton.size(200, 40);
  resetButton.mousePressed(resetSketch);

  buttons.push(
    createButton('Change Background').position(400, 500).style('background-color', 'white').size(150, 40).mousePressed(changeBackgroundColor),
    createButton('Change Text Color').position(200, 500).style('background-color', 'white').size(150, 40).mousePressed(changeTextColor),
    createButton('Change Text Stroke').position(10, 500).style('background-color', 'white').size(150, 40).mousePressed(changeTextStroke),
    createButton('Change Word').position(600, 500).style('background-color', 'white').size(150, 40).mousePressed(changeWord)
  );

  for (let button of buttons) {
    button.hide();
    resetButton.hide();
  }
}

function startSketch() {
  for (let button of buttons) {
    button.show();
  }
  startButton.hide();
  bgmusic.play();
  resetButton.show();
}

function resetSketch() {
  index = 0;
  points = font.textToPoints(words[index], 0, 0, size, {
    sampleFactor: 0.5,
    simplifyThreshold: 0.0
  
  });
  bgColor = color(150, 25, 255);
  textColor = color(255);
  textStroke = color(255);
  bgmusic.stop();

  
}

function draw() {
  background(bgColor);
  stroke(textStroke);
  let x = r * cos(angle) + mouseX;
  let y = r * sin(angle) + mouseY;
  translate(20, 300);
  for (let i = 0; i < points.length; i++) {
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  };
  textFont(font);
  textSize(size);
  fill(textColor);
  text(words[index], 0, 0 );

  let increment = 3 * sin(t);
  t++;
  angle += increment;
 
}

function changeBackgroundColor() {
  bgColor = color(random(255), random(255), random(255));
}

function changeTextColor() {
  textColor = color(random(255), random(255), random(255));
}

function changeTextStroke() {
  textStroke = color(random(255), random(255), random(255));
}

function changeWord() {
  index++;
  if (index == words.length) {
    index = 0;
  }
  points = font.textToPoints(words[index], 0, 0, size, {
    sampleFactor: 0.5,
    simplifyThreshold: 0.0
  });
}
function keyPressed() {
  if (key === 'w' || key === 'W') {
    yOffset -= 10; // Move text up
  } else if (key === 's' || key === 'S') {
    yOffset += 10; // Move text down
  
  }
}
    
  

