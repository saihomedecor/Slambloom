document.getElementById("slamForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let output = "";

  for (let i = 1; i <= 15; i++) {
    let val = document.getElementById("q"+i).value;
    if(val){
      output += "<p>" + val + "</p>";
    }
  }

  document.getElementById("resultContent").innerHTML = output;

  document.querySelector(".mainCard").classList.add("hidden");
  document.getElementById("storySection").classList.remove("hidden");
});

function downloadImage() {
  html2canvas(document.getElementById("captureArea")).then(canvas => {
    let link = document.createElement("a");
    link.download = "SlamBloom.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

function resetForm() {
  document.getElementById("slamForm").reset();
  document.querySelector(".mainCard").classList.remove("hidden");
  document.getElementById("storySection").classList.add("hidden");
}
