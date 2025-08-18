let btn = document.querySelector("button");
let colorName = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  colorName.innerText = getRandomColor();
  div.style.backgroundColor = getRandomColor();
  //   console.log(Math.floor(Math.random() * 10) + 1);
});

let getRandomColor = function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `RGB(${red} ,${green} ,${blue})`;
  return color;
};
