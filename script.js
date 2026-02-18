let themes = ["theme-dark", "theme-neon", "theme-pastel"];
let currentTheme = 0;

document.getElementById("slamForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("target").value;
  let personality = document.getElementById("personality").value;
  let red = document.getElementById("redflag").value;
  let confession = document.getElementById("confession").value;
  let yourname = document.getElementById("yourname").value || "Anonymous 😏";

  document.getElementById("rName").innerText = "💣 Expose for: " + name;
  document.getElementById("rPersonality").innerText = "🔥 " + personality;
  document.getElementById("rRed").innerText = "🚩 " + red;
  document.getElementById("rConfession").innerText = "👀 " + confession;
  document.getElementById("rBy").innerText = "— By " + yourname;

  document.getElementById("formSection").classList.add("hidden");
  document.getElementById("storySection").classList.remove("hidden");

  document.getElementById("bgMusic").play();
});

function changeTheme() {
  let card = document.getElementById("captureArea");
  card.classList.remove(themes[currentTheme]);
  currentTheme = (currentTheme + 1) % themes.length;
  card.classList.add(themes[currentTheme]);
}

function downloadImage() {
  html2canvas(document.getElementById("captureArea")).then(canvas => {
    let link = document.createElement("a");
    link.download = "SlamBloom.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

function shareStory() {
  alert("Instagram direct share limited by browser. Download & upload to story.");
}

function resetForm() {
  document.getElementById("slamForm").reset();
  document.getElementById("formSection").classList.remove("hidden");
  document.getElementById("storySection").classList.add("hidden");
}
