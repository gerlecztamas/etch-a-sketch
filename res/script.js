// default values onload
const DEFAULT_COLOR = "#4D455D";
const CLEAR_COLOR = "#ffffffb3";
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

// adding an eventlistener for each option on screen to run their respective functions
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

// the program switches to color mode even if only the color is changed without clicking the button
function colorChanger(){
    currentColor = colorChange.value;
    currentMode = "normal";
    colorChoice.classList.add("active");
    randomColor.classList.remove("active");
    eraser.classList.remove("active");
}

function createGrid(newSize){
    if(newSize < 2){
        alert("Grid size can't be smaller than 2!!");
        return;
    }
    if(newSize > 100){
        newSize = 100;
    }
    if (newSize === ""){
        newSize = DEFAULT_SIZE;
    }
    // clearing the whole grid first so they won't stack
    let mainGrid = document.querySelector(".grid");
    while (mainGrid.firstChild) {
        mainGrid.firstChild.remove();
    }

    // calculating the size of each small square and then appending them to the grid like a matrix
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

// each time we select an option only the targeted one will be highlighted differently
function changeMode(event){
    choices.forEach(function(item){
        item.classList.remove("active");
    });
    event.target.classList.add("active");
}

// the cursor only paints if the mouse is pressed so you can exit the grid without problem
function paintIt(event){
    if(!mouseDown) return;
    // we only need two modes because the currentColor is always either the chosen color on the colorpicker or the eraser
    if(currentMode == "normal"){
        event.target.style.backgroundColor = currentColor;
    }
    else{
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
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