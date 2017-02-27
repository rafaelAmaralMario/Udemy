var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var gradient = context.createLinearGradient(150, 100, 350, 300);

gradient.addColorStop(0, 'white');
gradient.addColorStop(1, '#49c900');



context.fillStyle = gradient;
context.fillRect(150, 100, 200, 200);

context.moveTo(150, 100);
context.lineTo(350, 300);

context.strokeStyle = "#F42924";
context.moveTo(150, 300);
context.lineTo(350, 100);
context.stroke();

context.beginPath();
context.strokeStyle = "#F42924";
context.arc(100, 100, 50, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.stroke();


var gradientText = context.createLinearGradient(200, 50, 300, 50);
gradientText.addColorStop(0, 'white');
gradientText.addColorStop(1, '#49c900');
context.fillStyle = gradientText;
context.font = "20px Arial";
context.fillText("My Canvas", 200, 50);