

var a = prompt('Enter the first variable: ');
var b= prompt('Enter the second variable:');
function setup(){
   b2 = createButton("click here to Swap");

  }


function draw()
{
  b2.mousePressed(swap);
}
function swap(){
  [a,b]=[b,a]
  console.log(a);
console.log(b);
}


