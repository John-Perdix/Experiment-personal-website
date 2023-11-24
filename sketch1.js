

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
  document.getElementById('instrucoes').innerHTML = 'Arrasta com o rato para desenha <br> Clica na tecla espaço para limpar';
  if (!backgroundSet) {
    background(220); // Set the background only once
    backgroundSet = true;
  }

  stroke(cor1);
  /* palleta(); */
}

var x = i * lado;
var y = windowHeight / 6 * 5;

/* function palleta() {
  while (i < 12) {
    cor[i] = color(random(255), random(255), random(255));
    fill(cor[i]);
    noStroke();
    square(x, y, lado);
    i++;
  }
}

function mouseClicked() {
  k = mouseX / lado;
  console.log(k);
  if (mouseY > y && mouseY < y + lado) {
    cor1 = cor[k];
  }
}*/

function mouseDragged() {
  stroke(cor1);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed(){
  if(keyCode==32){
    background(220);
  }
}
 

