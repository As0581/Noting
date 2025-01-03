


const titleElement = document.querySelector('#bignote-title')
const textElement = document.querySelector('#bignote-text')
let inputTitleElement = document.querySelector('#bignote-input-title')
const inputTextElement = document.querySelector('#bignote-input-text')

inputTitleElement.placeholder = 'Без названия'

const editBtn = document.querySelector('#edit')

function toggle(){
    titleElement.classList.toggle('hidden')
    textElement.classList.toggle('hidden')
    inputTitleElement.classList.toggle('hidden')
    inputTextElement.classList.toggle('hidden')
}

textElement.addEventListener('click' , ()=>{
    toggle()
    
})
titleElement.addEventListener('click' , ()=>{
    toggle()
})
editBtn.addEventListener('click', ()=>{
    toggle()
})


inputTitleElement.addEventListener('input', ()=>{
    titleElement.innerText = inputTitleElement.value
})

inputTextElement.addEventListener('input', ()=>{
    textElement.innerText = inputTextElement.value
})



//drawing
const drawBtn = document.querySelector('#draw')
const note = document.querySelector('.bignote-inner')
const drawing = document.querySelector('.bignote-canvas')
const drawingWidth = document.querySelector('#drawing-width')
const drawingHeight = document.querySelector('#drawing-height')
const canvasOptions = document.querySelector('.canvas-options')
const canvasWidthLabel = document.querySelector('label')
const canvasHeightLabel = document.querySelector('#draw-height')



drawBtn.addEventListener('click' , ()=>{
    drawing.classList.toggle('hidden')
    drawingWidth.classList.toggle('hidden')
    drawingHeight.classList.toggle('hidden')
    canvasWidthLabel.classList.toggle('hidden')
    canvasHeightLabel.classList.toggle('hidden')
    
})

drawingWidth.addEventListener('change', ()=>{
    canvas.width = drawingWidth.value
    canvasOptions.style.width = drawingWidth.value + 'px'
    ctx.lineCap = 'round';
})

drawingHeight.addEventListener('change',()=>{
  canvas.height = drawingHeight.value
  ctx.lineCap = 'round';  
})

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


let w = canvas.width
let h = canvas.height



const color_inp = document.querySelector('input[type="color"]');
const width_inp = document.querySelector('input[type="range"]');
const clear_button = document.querySelector('#clear');

ctx.lineCap = 'round';

color_inp.addEventListener('change', changeColor);
width_inp.addEventListener('change', changeLineWidth);
clear_button.addEventListener('click', clearCanvas);

let path = '';
let is_mouse_down = false;

canvas.addEventListener('mousedown', beginPath);
canvas.addEventListener('mousemove', extendPath);
canvas.addEventListener('mouseup', endPath);
canvas.addEventListener('mouseleave', endPath);

function beginPath(e) {
  path = `M ${e.offsetX} ${e.offsetY} L `;
  is_mouse_down = true;
}

function extendPath(e) {
  if (is_mouse_down) {
    path += `${e.offsetX} ${e.offsetY} `;
    draw();
    path = `M ${e.offsetX} ${e.offsetY} L `;
  }
}

function endPath(e) {
  path += `${e.offsetX} ${e.offsetY} `;
  draw();
  path = '';
  is_mouse_down = false;
}

function draw() {
  ctx.stroke(new Path2D(path));
}

function changeColor(event) {
  ctx.strokeStyle = event.target.value;
}

function changeLineWidth(event) {
  ctx.lineWidth = +event.target.value;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


// Add file 

const addFileBtn = document.querySelector('#Add-File')
const fileInput = document.querySelector('#file-input')
addFileBtn.addEventListener('click' , ()=>{
  fileInput.classList.toggle('hidden')
})

//save note

const saveNoteBtn = document.querySelector('#save')
const notesList = document.querySelector('.notes-list')

saveNoteBtn.addEventListener('click', ()=>{
  const notesItem = document.createElement('li')
  notesItem.classList.add('notes-list__item')
  if(inputTitleElement.value.length === 0){
    notesItem.innerText = inputTitleElement.placeholder
  }else{
    notesItem.innerText = inputTitleElement.value
  }
  
  notesList.appendChild(notesItem)
})

console.log(inputTitleElement.value);
