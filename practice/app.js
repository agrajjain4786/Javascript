// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//   console.dir(smallImages[i].src);
// }

// let link = document.querySelectorAll('.box a');

// console.dir(link);
// for (const q of link) {
//   q.style.color = 'green'
// }
// link[1].style.color = 'black'

let body = document.querySelector("body");
let p = document.createElement("p");
let h3 = document.createElement("h3");
let div = document.createElement("div");
let divH1 = document.createElement("h1");
let divP = document.createElement("p");

p.innerText = "Hey I'm red!";
p.style.color = "red";
body.appendChild(p);

h3.innerText = "I'm a blue h3";
h3.style.color = "blue";
body.appendChild(h3);

div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
body.appendChild(div);

divH1.innerText = "I'm in a div";
div.appendChild(divH1);

divP.innerText = "ME TOO!";
div.appendChild(divP);
