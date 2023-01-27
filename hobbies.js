var Collapse = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < Collapse.length; i++) {
  Collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var activity = this.nextElementSibling;
    if (activity.style.display === "block") {
      activity.style.display = "none";
    } else {
      activity.style.display = "block";
    }
  });
}