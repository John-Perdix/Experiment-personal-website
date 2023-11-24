

/* var s = function(sketch) {
    sketch.setup = function() {
      sketch.createCanvas(windowWidth, windowHeight, sketch.WEBGL);
      document.getElementById('para').innerHTML = 'Tu és o Designer!';
      document.getElementById('instrucoes').innerHTML = 'Anda com o rato para cima para baixo';
    };
  
    sketch.draw = function() {
  
      sketch.background(220, 220, 0);
      sketch.rotateX(sketch.mouseX * 0.01);
      sketch.rotateY(sketch.mouseY * 0.01);
      sketch.box(100);
    };
  };
  
  var myp5 = new p5(s);
 */
var cor1 = 0;
let backgroundSet = false;
var lado = windowWidth / 12;
var i = 0;
function draw() {
  document.getElementById('para').innerHTML = 'Tu és o Designer!';
  document.getElementById('instrucoes').innerHTML = 'Anda com o rato para cima para baixo';
  if (!backgroundSet) {
    background(220); // Set the background only once
    backgroundSet = true;
  }
  
  let val = slider.value();
  strokeWeight(val);

  stroke(cor1);
  palleta();
}

function palleta() {
  while (i < 12) {
    cor[i] = color(random(255), random(255), random(255));
    fill(cor[i]);
    noStroke();
    var x = i * lado;
    var y = windowHeight / 6 * 5;
    square(x, y, lado);
    i++;

  
  }

  // Check if the mouse is pressed and within any square
  for (let j = 0; j < 12; j++) {
    var x = j * lado;
    var y = windowHeight / 6 * 5;
    if (mouseIsPressed && mouseX > x && mouseX < x + lado && mouseY > y && mouseY < y + lado) {
      // Store the color in cor1
      cor1 = cor[j];
      console.log('carregou');
    }
  }

}

function mouseDragged() {
  stroke(cor1);
  line(mouseX, mouseY, pmouseX, pmouseY);
}



