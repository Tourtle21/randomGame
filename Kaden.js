var colors = ["blue", "green", "black", "orange", "yellow", "silver", "tan", "purple"];
var index = 0;

setInterval(function() {
  document.body.style.background = colors[index];
  index += 1;
  if (index >= colors.length) {
    index = 0;
  }
}, 50)
