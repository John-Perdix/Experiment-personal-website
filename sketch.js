var lado, cor, cor2, nl, nc, x_center, y_center;
var increment = 0.01;
var yoff = 0;

let font;

//sketch1
let render;

//sketch2
var time = 0;
var x_surfer;
let c1, c2;
let img;

//sketch3
let fixedPoint;
let radius = 400;
let movingPoint;
let arrowShot = false;
let x_robalo, y_robalo, robalo_width, robalo_height;

//sketch4
let player; // controlled by the mouse
let enemy;  // chases the player
let img_boia;
var sprite_sheet;


function preload() {
  //sketch2
  img = loadImage('assets/surfer.png');
  //sketch3
  img_robalo = loadImage('assets/robalo.png');
  //sketch4
  img_boia = loadImage('assets/boia.png');
  sprite_sheet = loadImage('assets/swim-02.png');
}

//sketch1
let slider;



function setup() {
  createCanvas(windowWidth, windowHeight);

  x_center = displayWidth / 2;
  y_center = displayHeight / 2;
  cor = 255;
  cor2 = 0;
  t = 0;
  background(cor2);

  start_color = color(random(255), random(255), random(255));
  end_color = color(random(255), random(255), random(255));

  document.getElementById('para').innerHTML = 'Clica no rato para mudar de cor';
  document.getElementById('instrucoes').innerHTML = 'Clica em qulquer com o rato lado para mudar a cor do efeito';


  //sketch1
  slider = createSlider(1,20, 1);
  slider.position(windowWidth/2, 20);
  slider.style('width', 'window');

  
  //sketch2
  x_surfer = random(windowWidth / 4, windowWidth / 4 * 3);

  //sketch3
  fixedPoint = createVector(windowWidth / 2, windowHeight);
  movingPoint = fixedPoint.copy(); // Start with the moving point at the fixed point
  x_robalo = 0;
  y_robalo = 10;
  vel = 5;
  robalo_width = 200;
  robalo_height = 100;

  //sketch4
  player = new Circle(width / 2, height / 2, 50, drawBoia); // Pass the drawing function
  enemy = new Circle(width / 4, height / 4, 30, drawEnemy);    // Pass a different drawing function
}

//Carregar a imagem do robalo
function surfer(x, y) {
  // Because the x-axis is reversed, we need to draw at different x position.
  image(img, x, y, 100, 100);
}

//sketch4 class
class Circle {
  constructor(x, y, radius, drawFunction) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.drawFunction = drawFunction;
    this.speed = 2; // adjust the speed of the chasing circle
  }

  move(targetX, targetY) {
    // Move towards the target (mouse) with a smooth motion
    this.x += (targetX - this.x) * 0.05;
    this.y += (targetY - this.y) * 0.05;
  }

  chase(target) {
    // Move towards the target (player) with a constant speed
    let angle = atan2(target.y - this.y, target.x - this.x);
    this.x += cos(angle) * this.speed;
    this.y += sin(angle) * this.speed;
  }

  display() {
    this.drawFunction(this.x, this.y, this.radius);
  }
}

function drawBoia(x, y, radius) {
  imageMode(CENTER);
  image(img_boia, x, y, radius * 2, radius * 2);
}

function drawEnemy(x, y, radius) {
  fill(255, 0, 0);
  ellipse(x, y, radius * 2, radius * 2);
}

/*function draw(){
  background(255);
  fill(255,0,0);
  circle(mouseX, mouseY, 25*2);

  stroke(0);
  circle(x_center-200, y_center, 100*2);
  circle(x_center+200, y_center, 100*2);
}*/

/*function drawRect() {
r = random();
if (r<0.5){
  blendMode(HARD_LIGHT);
}else{
  blendMode(BLEND);
}

fill(random);
rect(200,400,100);
  
}*/

var xoff = 0;
var yoff = 0;
var increment = 0.01;
var start_color, end_color;
var animationSpeed = 0.08;
var t = 0;

/*const funcoes = [desenho1(), desenho2()];*/

function draw() {
  desenho2();
}

function desenho1_nova() {
  background(0);
  noFill();

  // Interpolate color along the line
  var currentColor = lerpColor(start_color, end_color, (millis() % 50000) / 50000.0);

  // Use sin function to create a smooth oscillating motion
  var time = millis() * 0.08;  // Convert milliseconds to seconds
  var oscillation = 0.5 + 0.5 * sin(time * animationSpeed);

  // Interpolate color along the line
  var currentColor = lerpColor(start_color, end_color, oscillation);

  // Calculate position along the line
  var x = lerp(x, x + xoff, oscillation);
  var y = lerp(y, y + yoff, oscillation);

  if (frameCount % 50 == 0) {
    start_color = end_color;
    end_color = color(random(255), random(255), random(255));
  }

  stroke(currentColor);


  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, 0.1, 900);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += increment;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}


//old DESENHA1
function desenho1() {
  background(0);
  noFill();


  if (frameCount % 50 == 0) {
    cor = color(random(255), random(255), random(255), 100);
  }

  stroke(cor);

  var xoff = 0;     // Option #1: 2D Noise
  var xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to
    var y = map(noise(xoff, yoff), 0, 1, 0.1, 900);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += increment;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}


function desenho2() {
  noFill(0, 10);
  stroke(cor, 25);
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;
}

function mousePressed() {
  cor = color(random(255), random(255), random(255));
}

