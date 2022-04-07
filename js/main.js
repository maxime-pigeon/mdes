// Manage collapsible buttons for the Schedule Section
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Manage the display of the overlay in the Schedule Section
  // Overlay 1
document.getElementById("overlay1B").onclick = function ShowOverlay1() {
  document.getElementById("overlay1").style.display = "block";
}

document.getElementById("overlay1CloseB").onclick = function HideOverlay1() {
  document.getElementById("overlay1").style.display = "none";
}

  // Overlay 2
document.getElementById("overlay2B").onclick = function ShowOverlay2() {
  document.getElementById("overlay2").style.display = "block";
}

document.getElementById("overlay2CloseB").onclick = function HideOverlay2() {
  document.getElementById("overlay2").style.display = "none";
}

  // Overlay 3
document.getElementById("overlay3B").onclick = function ShowOverlay3() {
  document.getElementById("overlay3").style.display = "block";
}

document.getElementById("overlay3CloseB").onclick = function HideOverlay3() {
  document.getElementById("overlay3").style.display = "none";
}