function random(max) {
  return Math.floor(Math.random() * max);
}

function load() {
  document.getElementById("total").innerText = random(1000);
  document.getElementById("active").innerText = random(500);
  document.getElementById("new").innerText = random(100);
}
