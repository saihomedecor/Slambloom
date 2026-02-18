document.getElementById("slamForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("target").value;
  let personality = document.getElementById("personality").value;
  let redflag = document.getElementById("redflag").value;
  let confession = document.getElementById("confession").value;

  document.getElementById("resultName").innerText = "💣 Expose for: " + name;
  document.getElementById("resultPersonality").innerText = "🔥 Personality: " + personality;
  document.getElementById("resultRedflag").innerText = "🚩 Red Flag: " + redflag;
  document.getElementById("resultConfession").innerText = "👀 Secret: " + confession;

  document.getElementById("slamForm").classList.add("hidden");
  document.getElementById("resultCard").classList.remove("hidden");
});

function resetForm() {
  document.getElementById("slamForm").reset();
  document.getElementById("slamForm").classList.remove("hidden");
  document.getElementById("resultCard").classList.add("hidden");
}
