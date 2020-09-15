

var box = document.getElementById("square")

document.getElementById("square").addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
})

document.getElementById("square").addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
})

document.getElementById("square").addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
})

document.getElementById("square").addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
})

window.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "orange"
})

addEventListener("keydown", function(event) {
    if (event.keyCode == 82)
      square.style.background = "red";
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 66)
      square.style.background = "blue";
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 89)
      square.style.background = "yellow";
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 71)
      square.style.background = "green";
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 79)
      square.style.background = "orange";
  });