const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");


const element = document.getElementById("fade-in-element");
element.style.opacity = "0";
element.style.transition = "opacity 1s ease-in-out";

window.addEventListener("load", function() {
  element.style.opacity = "1";
  draw_arrow();
});

var botan = "none";
var botan2 = "none";
var botan3 = "none";
const btn1select = document.querySelector("#btn1");
var btn1 = document.getElementById("btn1");
var btn12 = document.getElementById("btn12");
var btn2 = document.getElementById("btn2");


canvas.addEventListener("mousemove", event => {
  var rect = event.target.getBoundingClientRect();
　var XX = event.clientX - rect.left;
　var YY = event.clientY - rect.top;
  if (botan === "none") {
    draw(XX, YY);
  };
});

canvas.addEventListener("touchmove", event => {
  var rect = event.target.getBoundingClientRect();
　var XX = event.clientX - rect.left;
　var YY = event.clientY - rect.top;
  if (botan === "none") {
    draw(XX, YY);
  };
});




//パソコンでクリックしてる間だけ描けるようにした機能
canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});



//お絵かきするところをきれいにする機能
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  if (botan === "none") {
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw_arrow();
  }
});

const collectButton = document.querySelector("#collect-button");
collectButton.addEventListener("click", () => {
  if (botan2 === "done") {
    botan = "done";
    btn1.classList.remove("hidden");
  }
});







const OKButton = document.querySelector("#btn12");
OKButton.addEventListener("click", () => {
  if (botan3 === "done") {
    btn2.classList.remove("hidden");
  }
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
}





//線をかく機能
function draw(x, y) {
  if (!isDrag) {
      return;
  }
  context.lineTo(x, y);
  context.stroke();
  botan2 = "done"; 
}



btn1select.addEventListener("change", (event) => {
  btn12.classList.remove("hidden");
  botan3 = "done";
});

btn12.addEventListener("click", (event) => {
  btn2.classList.remove("hidden");
  btn2.scrollIntoView({ behavior: "smooth" });
});