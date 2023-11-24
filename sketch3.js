

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0, 50, 80);
  if(robalo){
  document.getElementById('para').innerHTML = 'Apanha o robalo';
  document.getElementById('instrucoes').innerHTML = 'Controla o arpão arrastado o rato na horizontal, para o disparar clica na barra de espaço. Se quiseres fazer reset ao arpão volta a carregar na barra de espaço';

  }

  x_robalo += vel;
  robalo(x_robalo, y_robalo);
  if (x_robalo - robalo_width > windowWidth || x_robalo < 0) {
    vel *= -1;
    y_robalo += 100;
  }
  if (y_robalo > windowHeight / 2) {
    y_robalo = 10;
  }


  if (arrowShot) {
    // Move the arrow (moving point) in the direction of the arrow
    let direction = p5.Vector.sub(fixedPoint, movingPoint); // Reverse the direction vector
    direction.normalize();
    direction.mult(5); // Adjust the speed of the arrow
    movingPoint.sub(direction);

    // Draw the arrow
    drawArrowhead(fixedPoint, movingPoint, 50);

    // Draw the line from the fixed point to the moving point
    stroke(0);
    line(movingPoint.x, movingPoint.y, movingPoint.x, movingPoint.y);

    // Check if the arrow has gone off-screen
    if (movingPoint.y < 0 || movingPoint.x < 0 || movingPoint.x > windowWidth) {
      arrowShot = false;
    }
 
    //check collision
    if (vel > 0 && movingPoint.x < x_robalo && movingPoint.x > x_robalo - robalo_width && movingPoint.y < y_robalo + robalo_height) {
      arrowShot = false;
      hideRobalo();
      document.getElementById('para').innerHTML = 'Parabens apanhaste o robalo!';
    }
    if (vel < 0 && movingPoint.x > x_robalo && movingPoint.x < x_robalo + robalo_width && movingPoint.y < y_robalo + robalo_height) {
      arrowShot = false;
      hideRobalo();
      document.getElementById('para').innerHTML = 'Parabens apanhaste o robalo!';
    }

  } else {
    // Calculate the position of the moving point based on mouseX
    let angle = radians(map(mouseX, 0, width, 0, -180));
    movingPoint = createVector(fixedPoint.x + cos(angle) * radius, fixedPoint.y + sin(angle) * radius);

    // Draw the fixed point
    fill(0, 80, 80);
    ellipse(fixedPoint.x, fixedPoint.y, 10, 10);

    // Draw the line from the fixed point to the moving point
    stroke(0);
    strokeWeight(10);
    line(fixedPoint.x, fixedPoint.y, movingPoint.x, movingPoint.y);

    // Draw the circle border
    /*noFill();
    stroke(0);
    ellipse(fixedPoint.x, fixedPoint.y, radius * 2, radius * 2);*/

    drawArrowhead(fixedPoint, movingPoint, 50);
  }
}

function keyPressed() {
  if (keyCode === 32) { // Check if the spacebar is pressed
    arrowShot = true;
  }

  if (arrowShot = true && keyCode === 32) {
    arrowShot = true;
  }
}

function drawArrowhead(p1, p2, size) {
  fill(120);
  noStroke();
  push();
  translate(p2.x, p2.y);
  rotate(atan2(p2.y - p1.y, p2.x - p1.x));
  triangle(-size, -size * 0.2, 0, 0, -size, size * 0.2);
  pop();
}


let isRobaloHidden = false;

// Carregar a imagem do robalo
function robalo(x, y) {
  if (!isRobaloHidden) {
    if (vel > 0) {
      push();
      scale(-1, 1);
      image(img_robalo, -x, y, robalo_width, robalo_height);
      pop();
    } else {
      image(img_robalo, x, y, robalo_width, robalo_height);
    }
  }
}

// Function to hide the robalo
function hideRobalo() {
  isRobaloHidden = true;
}

