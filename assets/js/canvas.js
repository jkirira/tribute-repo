var c = document.getElementById("myCanvas");
var outer_circle = c.getContext("2d");
var inner_circle = c.getContext("2d");

outer_circle.beginPath();
outer_circle.arc(100, 75, 50, 0, 2 * Math.PI);
outer_circle.fillStyle = "red";
outer_circle.fill();

inner_circle.beginPath();
inner_circle.arc(100, 75, 27, 0, 2 * Math.PI);
inner_circle.fillStyle = "yellow";
inner_circle.fill();

outer_circle.stroke();
inner_circle.stroke();
