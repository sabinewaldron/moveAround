var x, y;
var xAcc, yAcc;
var xVelocity, yVelocity;
var normalVelocity;

function setup() {
  createCanvas(innerWidth, innerHeight);
  x = width/2;
  y = height/2;
  translate(width/2, height/2);
  normalVelocity = 13;
  xAcc = yAcc = 0;
  xVelocity = yVelocity = 0;
}
  function draw(){
    background(255, 226, 25);
    fill(0, 0, 0);
    x += xVelocity;
    y += yVelocity;
    x = constrain(x, 25, width, -25);
    y = constrain(y, 25, height, -25);
    ellipse(x, y, 100, 100);
      if(xAcc ==0){
        if(xVelocity > 0){
          xVelocity -= .5;
        }
        if(xVelocity < 0){
        xVelocity += .5;
      }
    }
    if(yAcc ==0){
      if(yVelocity > 0){
        yVelocity -= .5;
      }
      if(yVelocity < 0){
      yVelocity += .5;
    }
  }
}
function keyPressed(){
    if(keyCode == 39){//move right right
      xAcc = 1;
      xVelocity = normalVelocity;
  }
  if(keyCode == 37){//move right left
    xAcc = 1;
    xVelocity = -normalVelocity;
  }
  if(keyCode == 38){//move right up
    yAcc = 1;
    yVelocity = -normalVelocity;
  }
  if(keyCode == 40){//move right down
    yAcc = 1;
    yVelocity = normalVelocity;
  }
}
  function keyReleased(){
    if(keyCode == 39 || keyCode == 37){//stop moving right x direction
    xAcc = 0;
  }
    if(keyCode == 38 || keyCode == 40){//stop moving right x direction
    yAcc = 0;
  }
}
