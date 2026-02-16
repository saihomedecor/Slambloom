document.getElementById("slamForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("slamForm").style.display = "none";
  document.getElementById("result").classList.remove("hidden");
});
