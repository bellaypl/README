function setup() {
   createCanvas(400, 400);
}
let xBolinha = 200;
 let yBolinha = 200;
 let diametro = 10;
 let velocidadeXBolinha = 5;
 let velocidadeYBolinha = 3;

 function draw() {
   background(0);
  circle(xBolinha, yBolinha, diametro);
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
 } 
