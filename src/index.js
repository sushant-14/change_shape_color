var color = document.getElementById("color");
var shape = document.getElementById("shape");
var c = document.getElementById("circle");
var s = document.getElementById("shaper");
var available_shape = [
  "square",
  "minicircle",
  "triangle",
  "triangle-down",
  "triangle-bottom-left",
  "triangle-bottom-right",
  "triangle-top-left",
  "triangle-top-right"
];

shape.addEventListener("click", function () {
  var index =
    available_shape[Math.floor(Math.random() * available_shape.length)];
  s.setAttribute("class", index);
  console.log(index, "shape click");
});

color.addEventListener("click", function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  c.style.backgroundColor = "#" + randomColor;
  console.log("color click");
});
