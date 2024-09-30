var canvas = document.querySelector('#draw-area');
var canvas2 = document.querySelector('#draw-area2');
var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');
var part2 = document.getElementById("part2");
var botan = "none";
var botan2 = "none";

canvas.addEventListener('mousedown', function(ev){
    if (botan === "none") {
        context.beginPath();
        context.moveTo(ev.offsetX, ev.offsetY);
        botan2 = "done"; 
    }
});

canvas.addEventListener('mousemove', function(ev){
    if(ev.which){
        if (botan === "none") {
            context.lineTo(ev.offsetX, ev.offsetY);
            context.stroke();
            botan2 = "done"; 
        }
    }
});

document.querySelector('#collect-button2').addEventListener('click', function(ev){
    if (botan2 === "done") {
        
        var image = context.getImageData(0, 0, canvas.width, canvas.height);
        
        context2.putImageData(image, 100, 0);
        draw_arrow2();
        part2.classList.remove("hidden");
        botan = "done";
        part2.scrollIntoView({ behavior: "smooth" });
    }
});




const element = document.getElementById("fade-in-element");
element.style.opacity = "0";
element.style.transition = "opacity 1s ease-in-out";

window.addEventListener("load", function() {
  element.style.opacity = "1";
});


canvas2.addEventListener('mousedown', function(ev){
    context2.beginPath();
    context2.moveTo(ev.offsetX, ev.offsetY);
});

canvas2.addEventListener('mousemove', function(ev){
    if(ev.which){
        context2.lineTo(ev.offsetX, ev.offsetY);
        context2.stroke();
        
    }
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



window.addEventListener('load', () => {
  draw_arrow();
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
  context.fillText("1month ago", 50, 320);
  context.fillText("now", 400, 320);
}

function draw_arrow2() {
    context2.strokeStyle = "#dedede";
    context2.beginPath();
    context2.moveTo(150, 300);
    context2.lineTo(550, 300);
    context2.moveTo(550, 300);
    context2.lineTo(530, 280);
    context2.moveTo(550, 300);
    context2.lineTo(530, 320);
    context2.lineCap = "round";
    context2.lineWidth = 4;
    context2.stroke();

    context2.strokeStyle = "black";
    context2.beginPath();
    context2.moveTo(50, 300);
    context2.lineTo(650, 300);
    context2.moveTo(650, 300);
    context2.lineTo(630, 280);
    context2.moveTo(650, 300);
    context2.lineTo(630, 320);
    context2.lineCap = "round";
    context2.lineWidth = 3;
    context2.stroke();
    context2.fillStyle = "black";
    context2.fillText("past", 50, 320);
    context2.fillText("future", 550, 320);
  }




