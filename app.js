console.log("Hello World");

// if statement

let color = "yellow";

if (color == "red") {
  console.log(`stop light is ${color}`);
}
if (color == "yellow") {
  console.log(`go slow light is ${color}`);
}
if (color == "green") {
  console.log(`go light is ${color}`);
}

//  else-if
let score = 75;
if (score >= 80) {
  console.log("A+");
} else if (score >= 70) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 50) {
  console.log("C");
} else if (score >= 40) {
  console.log("D");
}

// alert

alert("Something is wronge!");

// prompt

let name = prompt("enter your name");
console.log(`you enter this ${name}`)