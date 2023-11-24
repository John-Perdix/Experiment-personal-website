

function draw() {
  createCanvas(windowWidth, windowHeight);
  document.getElementById('para').innerHTML = 'Tu és o mar!';
  document.getElementById('instrucoes').innerHTML = 'Anda com o rato para cima para baixo';
  background(54, 132, 232);
 /* fill(255,255,180);
  circle(windowWidth/2, windowHeight/3*2, 200);

  c1 = color(255,150,0);
  c2 = color(255, 100, 0);

  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }*/
  
  var x = 0;
  y = mouseY + 200 * noise(x / 1000, time/8);
  
  while (x < width) {
    stroke(0, 50, 80);
    line(x, mouseY + 200 * noise(x / 1000, time/6), x, height);
    x = x + 1;
  }
  
  time = time + 0.02;
  surfer(x_surfer,y);
  console.log(render);
}
