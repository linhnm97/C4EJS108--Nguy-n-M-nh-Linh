let N
let x
let y

numberOneTriangle();

function numberOneTriangle() {
  N = prompt(`Enter N`);
  for (y = 1; y <= N; y++){   
    document.write(`<br>`) 
    for (x = 1; x <= y; x++){        
    document.write(`*`)
    }
  }}