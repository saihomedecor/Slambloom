document.getElementById("slamForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("target").value;
  let yourname = document.getElementById("yourname").value || "Anonymous 😏";
  let personality = document.getElementById("personality").value;
  let red = document.getElementById("redflag").value;
  let confession = document.getElementById("confession").value;

  document.getElementById("rName").innerText = "💣 Expose for: " + name;
  document.getElementById("rPersonality").innerText = "🔥 " + personality;
  document.getElementById("rRed").innerText = "🚩 " + red;
  document.getElementById("rConfession").innerText = "👀 " + confession;
  document.getElementById("rBy").innerText = "— By " + yourname;

  document.querySelector(".container").classList.add("hidden");
  document.getElementById("storyCard").classList.remove("hidden");

  document.getElementById("revealSound").play();
});

function downloadImage() {
  html2canvas(document.getElementById("captureArea")).then(canvas => {
    let link = document.createElement("a");
    link.download = "SlamBloom_Story.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

function resetForm() {
  document.getElementById("slamForm").reset();
  document.querySelector(".container").classList.remove("hidden");
  document.getElementById("storyCard").classList.add("hidden");
}
let musicPlaying = false;
let themes = ["theme-dark", "theme-neon", "theme-pastel"];
let currentTheme = 0;

function toggleMusic() {
  let music = document.getElementById("bgMusic");
  if (musicPlaying) {
    music.pause();
  } else {
    music.play();
  }
  musicPlaying = !musicPlaying;
}

function changeTheme() {
  let card = document.getElementById("captureArea");
  card.classList.remove(themes[currentTheme]);
  currentTheme = (currentTheme + 1) % themes.length;
  card.classList.add(themes[currentTheme]);
}

function shareStory() {
  html2canvas(document.getElementById("captureArea")).then(canvas => {
    canvas.toBlob(blob => {
      let file = new File([blob], "SlamBloom.png", { type: "image/png" });

      if (navigator.share) {
        navigator.share({
          files: [file],
          title: "SlamBloom Expose 😈",
          text: "Check this out!"
        });
      } else {
        alert("Sharing not supported on this device. Download and share manually.");
      }
    });
  });
}
