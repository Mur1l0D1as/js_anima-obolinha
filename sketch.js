let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(1210, 810);
  background(" black");
  cor = color(random(0, 255),random(0, 255),random(0, 255));
 circuloX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0];
 circuloY = [random(height), random(height), random(height), random(height), random(height), random(height), random(height), random (height), random(height), random(height), random(height), random(height),  random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height), random(height)];
}

function draw() {
  fill(cor);
  
  for (let contador in circuloX){
  circle(circuloX[contador], circuloY[contador], 78);
  circuloX[contador]+= random (0,5);
  circuloY[contador]+= random (-20,20) 
    
   if(circuloX [contador]>=width){
   circuloX[contador] = 0;
   circuloY[contador] = random (height);
   cor = color(random(0, 255),random(0, 255), random(0, 255));
   }
}
  if(mouseIsPressed){
  cor = color(random(0, 255),random(0, 255),random(0, 255));
  }
}