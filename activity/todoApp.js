let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  // add task
  let li = document.createElement("li");
  li.innerText = input.value;

  let dBtn = document.createElement("button");
  dBtn.innerText = "Delete";
  dBtn.classList.add("delete");

  li.appendChild(dBtn);
  ul.appendChild(li);
  input.value = "";
});

// this not working due to when we make a new element and try to trigger the eventListener() on it .it work on only already existing element that make by the html file.
// let delBTN = document.querySelectorAll(".delete");
// for (delBtn of delBTN) {
//   delBtn.addEventListener("click", function () {
//     let per = this.parentElement;
//     console.log(per);
//     per.remove();
//   });
// }

// to make it working we use Event Delegation on the parent element on the bases of EVENT BUBBLING consept.

ul.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let item = e.target.parentElement;
    item.remove();
  }
});
