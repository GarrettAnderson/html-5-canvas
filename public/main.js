/* ========================
   Garrett Custom JS
 ======================== */

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
let isDrawing = false;
let x = 0;
let y = 0;

console.log(canvas)
console.log(ctx)

function startLine(e) {
  x = e.screenX
  y = e.screenY
  isDrawing = true
  console.log(e)
}


canvas.addEventListener('mousedown', startLine)

canvas.addEventListener('mousemove', (e) => {
  console.log(e)
})

canvas.addEventListener('mouseup', (e) => {
  console.log(e)
})


/*

================================================================
 Draw a black box with a white box inside and then box outline
 inside white box by following along with MDN
================================================================

ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);

==================
 Draw a triangle
==================

ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();


==================
 Draw a triangle
==================
*/

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
ctx.stroke();





























 /* ========================
    Wes Bos JS
  ======================== */

// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokeStyle = '#BADA55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 100;
// // ctx.globalCompositeOperation = 'multiply';
//
// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// let hue = 0;
// let direction = true;
//
// function draw(e) {
//   if (!isDrawing) return; // stop the fn from running when they are not moused down
//   console.log(e);
//   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//   ctx.beginPath();
//   // start from
//   ctx.moveTo(lastX, lastY);
//   // go to
//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.stroke();
//   [lastX, lastY] = [e.offsetX, e.offsetY];
//
//   hue++;
//   if (hue >= 360) {
//     hue = 0;
//   }
//   if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
//     direction = !direction;
//   }
//
//   if(direction) {
//     ctx.lineWidth++;
//   } else {
//     ctx.lineWidth--;
//   }
//
// }
//
// canvas.addEventListener('mousedown', (e) => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY];
// });
//
//
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);
