


function draw() {

  createCanvas(windowWidth, windowHeight);
  document.getElementById('para').innerHTML = 'Nao salves o banhista! <br> Foge com a boia!';
  document.getElementById('instrucoes').innerHTML = 'Controla a boia com a posição do rato';
  background(255, 150, 12);


  // Check for collision
  if (checkCollision(player, enemy)) {
    // Handle collision, for example, reset the enemy position
    enemy = false;
    player = false;

    document.getElementById('para').innerHTML = 'O banhista apanhou a boia...';
  }

  // Move the player circle to the mouse position
  player.move(mouseX, mouseY);
  player.display();

  // Move and chase the player circle
  enemy.chase(player);
  enemy.display();
}

function checkCollision(circle1, circle2) {
  // Calculate the distance between the centers of the circles
  let distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);

  // Check if the distance is less than the sum of the radii
  if (distance < circle1.radius + circle2.radius) {
    return true; // Collision detected
  } else {
    return false; // No collision
  }
}
