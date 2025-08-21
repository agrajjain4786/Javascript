let btn = document.querySelector("button");
let img = "https://api.thecatapi.com/v1/images/search";
let factUrl = "https://catfact.ninja/fact";
let P = document.createElement("P");
let p = document.createElement("IMG");

btn.addEventListener("click", async () => {
  let fact = await getFact();
  console.log(fact);
  P.innerText = fact;
  document.querySelector("body").appendChild(P);
});

btn.addEventListener("click", async () => {
  let fact = await getImg();
  console.log(fact);
  p.setAttribute("src", fact);
  p.classList.add("size");
  document.querySelector("body").appendChild(p);
});

async function getImg() {
  try {
    let res = await axios.get(img);
    return res.data[0].url;
  } catch (e) {
    console.log(`Error occur :- ${e}`);
    return `Fact not Found`;
  }
}

async function getFact() {
  try {
    let res = await axios.get(factUrl);
    return res.data.fact;
  } catch (e) {
    console.log(`Error occur :- ${e}`);
    return `Fact not Found`;
  }
}
