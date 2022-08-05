const image = document.getElementById("poggy");
const button = document.getElementById("theclicker");
const loader = document.getElementById("loader");

const url = "https://cataas.com/cat?json=true";

loader.style.opacity = "0";

async function onClick() {
  loader.style.opacity = "1";
  const res = await fetch(url);
  const data = await res.json();
  image.src = `https://cataas.com${data.url}`;
}

button.addEventListener("click", onClick);

image.addEventListener("load", () => {
  loader.style.opacity = "0";
});
