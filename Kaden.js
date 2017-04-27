var colors = ["blue", "green", "black", "orange", "yellow", "silver", "tan", "purple"];
var index = 0;
var spasm = true;

setInterval(function() {
  if (spasm) {
    document.body.style.background = colors[index];
    index += 1;
    if (index >= colors.length) {
      index = 0;
    }
  }
}, 50)
input = document.createElement("input");
document.body.appendChild(input);
function stop() {
  if (input.value == 69) {
    if (spasm) {
      spasm = false;
    } else {
      spasm = true;
    }
  }
}
