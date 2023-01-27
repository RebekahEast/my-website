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

function show_craft() {
    document.getElementById('water-bottle')
            .style.display = "block";
    document.getElementById('button-id')
            .style.display = "none";
}