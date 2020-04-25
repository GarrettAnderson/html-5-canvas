const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0

function draw(event) {
  if (!isDrawing) return // stop the function from running when they are not moused
  console.log(event)
  ctx.beginPath()
  // start from 
  ctx.moveTo(lastX, lastY)
  // go to
  ctx.lineTo(event.offsetX, event.offsetY)
  ctx.stroke()
  [lastX, lastY] = [event.offsetX, event.offsetY]
  hue++
  if(hue >= 360) {
    hue = 0
  }

  
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true
  [lastX, lastY] = [event.offsetX, event.offsetY]
})
canvas.addEventListener('mousemove', draw) 
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false) 