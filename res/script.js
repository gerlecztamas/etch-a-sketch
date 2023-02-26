const DEFAULT_COLOR = "#000000";
const CLEAR_COLOR = "#ffffff";
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "normal";

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

let mouseDown = false;

let choices = document.querySelectorAll(".choice");

let colorChoice = document.getElementById("color-choice");
let randomColor = document.getElementById("random");
let eraser = document.querySelector("#eraser");
let clear = document.querySelector("#clear");
let colorChange = document.getElementById("colorpicker");


colorChoice.addEventListener("click", colorChooser);
randomColor.addEventListener("click", colorRandomizer);
eraser.addEventListener("click", erase);
clear.addEventListener("click", clearGrid);
colorChange.addEventListener("change", colorChanger);


function colorChooser(event){
    currentColor = document.getElementById("colorpicker").value;
    currentMode = "normal";
    changeMode(event);
}

function colorRandomizer(event){
    currentMode = "random";
    changeMode(event);
}

function erase(event){
    currentColor = CLEAR_COLOR;
    currentMode = "normal";
    changeMode(event);
}

function colorChanger(){
    currentColor = colorChange.value;
    currentMode = "normal";
    colorChoice.classList.add("active");
    randomColor.classList.remove("active");
    eraser.classList.remove("active");
}


function createGrid(newSize){
    if(newSize > 100){
        newSize = 100;
    }
    let mainGrid = document.querySelector(".grid");
    while (mainGrid.firstChild) {
        mainGrid.firstChild.remove();
    }
    if (newSize === ""){
        newSize = 16;
    }

    let gridSize = 500 / newSize;
    
    for(let i = 0; i < newSize; i++){
        let newLine = document.createElement("div");
        newLine.style.display = "flex";
        mainGrid.appendChild(newLine);
        for(let j = 0; j < newSize; j++){
            let newGrid = document.createElement("div");
            newGrid.style.height = `${gridSize}px`;
            newGrid.style.width = `${gridSize}px`;
            newGrid.classList.add("gridsquare");
            newGrid.addEventListener("mouseover", paintIt)
            newLine.appendChild(newGrid);
        }
    }
}

function changeGrid(){
    currentSize = document.getElementById("grid-number").value;
    createGrid(currentSize);
}

function changeMode(e){
    choices.forEach(function(item){
        item.classList.remove("active");
    });
    e.target.classList.add("active");
}

function paintIt(e){
    if(!mouseDown) return;
    if(currentMode == "normal"){
        e.target.style.backgroundColor = currentColor;
    }
    else{
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}

function clearGrid(){
    let grids = document.querySelectorAll(".gridsquare");
    grids.forEach(function(item){
        item.style.backgroundColor = CLEAR_COLOR;
    });
}

window.onmousedown = () => {mouseDown = true;};
window.onmouseup = () => {mouseDown = false;};
createGrid(DEFAULT_SIZE);