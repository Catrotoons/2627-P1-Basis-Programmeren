let x = 100;
let groet = "Hallo Wereld!";
let a = 20;
let b = 10;
let optellen = a + b;
let aftellen = a - b;
let vermenigvuldigen = a * b;
let delen = a / b;

function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(220);

text(x, 20, 20);  
let y = 80;  
text(groet, 20, 60);
text("optellen: " + optellen, 20, y);
y = y + 20;
text("aftellen: " + aftellen, 20, y);
y = y + 20;
text("vermenigvuldigen: " + vermenigvuldigen, 20, y);
y = y + 20;
text("delen: " + delen, 20, y);
y = y + 20;




  
}


