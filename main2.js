const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");


const element = document.getElementById("fade-in-element");
element.style.opacity = "0";
element.style.transition = "opacity 1s ease-in-out";

window.addEventListener("load", function() {
  element.style.opacity = "1";
  draw_arrow();
  text();
});


var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


const Button11 = document.querySelector("#btn11");
Button11.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  text();
  draw_arrow();
  context.beginPath();
  context.moveTo(50, 280);
  context.bezierCurveTo(50, 280, 180, 280, 200, 260);
  context.bezierCurveTo(220, 180, 250, 50, 250, 60);
  context.bezierCurveTo(250, 50, 250, 180, 300, 260);
  context.bezierCurveTo(320, 280, 450, 270, 450, 270);
  context.lineWidth = 3;
  context.stroke();

  btn2.classList.remove("hidden");
});

const Button12 = document.querySelector("#btn12");
Button12.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  text();
  draw_arrow();
  context.beginPath();
  context.moveTo(50, 250);
  context.bezierCurveTo(50, 250, 220, 250, 250, 230);
  context.lineWidth = 3;
  context.stroke();

  context.beginPath();
  context.fillStyle = "#dedede";
  context.arc(250, 230, 3, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.moveTo(250, 60);
  context.bezierCurveTo(250, 50, 250, 180, 300, 260);
  context.bezierCurveTo(320, 280, 450, 270, 450, 270);
  context.lineWidth = 3;
  context.stroke();

  context.beginPath();
  context.fillStyle = "black";
  context.arc(250, 60, 3, 0, 2 * Math.PI);
  context.fill();

  btn2.classList.remove("hidden");
});

const Button13 = document.querySelector("#btn13");
Button13.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  text();
  draw_arrow();
  context.beginPath();
  context.moveTo(50, 250);
  context.bezierCurveTo(50, 250, 220, 250, 250, 230);
  context.lineWidth = 3;
  context.stroke();

  context.beginPath();
  context.fillStyle = "#dedede";
  context.arc(250, 230, 3, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.moveTo(250, 60);
  context.lineTo(280, 60);
  context.lineWidth = 3;
  context.stroke();

  context.beginPath();
  context.fillStyle = "#dedede";
  context.arc(280, 60, 3, 0, 2 * Math.PI);
  context.fill();
  context.stroke();


  context.beginPath();
  context.moveTo(280, 230);
  context.bezierCurveTo(320, 280, 450, 270, 450, 270);
  context.lineWidth = 3;
  context.stroke();

  context.beginPath();
  context.fillStyle = "black";
  context.arc(280, 230, 3, 0, 2 * Math.PI);
  context.fill();

  btn2.classList.remove("hidden");
});




//軸の矢印を描画
function draw_arrow() {
  context.beginPath();
  context.moveTo(50, 300);
  context.lineTo(450, 300);
  context.moveTo(450, 300);
  context.lineTo(430, 280);
  context.moveTo(450, 300);
  context.lineTo(430, 320);
  context.lineCap = "round";
  context.lineWidth = 3;
  context.stroke();

  context.beginPath();
  context.moveTo(50, 300);
  context.lineTo(50, 100);
  context.moveTo(50, 100);
  context.lineTo(30, 120);
  context.moveTo(50, 100);
  context.lineTo(70, 120);
  context.lineCap = "round";
  context.lineWidth = 3;
  context.stroke();
  context.fillText("嬉しい度", 70, 140);
}

function text() {
  context.fillText("嬉しいことが", 250, 320);
  context.fillText("起きた！", 250, 340);
  context.beginPath();
  context.setLineDash([5, 15]);
  context.moveTo(250, 300);
  context.lineTo(250, 20);
  context.lineWidth = 1;
  context.stroke();
  context.setLineDash([]);
}




btn2.addEventListener("click", (event) => {
  btn3.classList.remove("hidden");
  btn3.scrollIntoView({ behavior: "smooth" });
});
