const DEFAULT_COLOR = "#000000";
const CLEAR_COLOR = "#ffffff";
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "normal";

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;




let clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);

let colorChoice = document.getElementById("color-choice");
let randomColor = document.getElementById("random");
let eraser = document.querySelector("#eraser");
let colorChanger = document.getElementById("colorpicker");

function changeGrid(){
    currentSize = document.getElementById("grid-number").value;
    createGrid(currentSize);
}


colorChoice.addEventListener("click", event => {
    currentColor = document.getElementById("colorpicker").value;
    currentMode = "normal";
    colorChoice.classList.add("active");
    randomColor.classList.remove("active");
    eraser.classList.remove("active");
});


randomColor.addEventListener("click", event => {
    currentMode = "random";
    colorChoice.classList.remove("active");
    randomColor.classList.add("active");
    eraser.classList.remove("active");
});


eraser.addEventListener("click", erase);
function erase(){
    currentColor = CLEAR_COLOR;
    currentMode = "normal";
    colorChoice.classList.remove("active");
    randomColor.classList.remove("active");
    eraser.classList.add("active");
}


colorChanger.addEventListener("change", event => {
    currentColor = colorChanger.value;
    currentMode = "normal";
    colorChoice.classList.add("active");
    randomColor.classList.remove("active");
    eraser.classList.remove("active");
});


function createGrid(xy){
    if(xy > 100){
        xy = 100;
    }
    let mainGrid = document.querySelector(".grid");
    while (mainGrid.firstChild) {
        mainGrid.firstChild.remove();
    }
    if (xy === ""){
        xy = 16;
    }

    let gridSize = 500 / xy;
    
    for(let i = 0; i < xy; i++){
        let newLine = document.createElement("div");
        newLine.style.display = "flex";
        mainGrid.appendChild(newLine);
        for(let j = 0; j < xy; j++){
            let newGrid = document.createElement("div");
            newGrid.style.height = `${gridSize}px`;
            newGrid.style.width = `${gridSize}px`;
            newGrid.classList.add("gridsquare");
            newGrid.addEventListener("mouseover", paintItt)
            newLine.appendChild(newGrid);
        }
    }
    //paintIt(heha.value);
}

function paintItt(e){
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

/*function paintIt(color){
    let grids = document.querySelectorAll(".gridsquare");
    grids.forEach(function(item){
        item.addEventListener("mouseover", event => {
        item.style.backgroundColor = color;
        })
    });
}*/

createGrid(DEFAULT_SIZE);
//paintIt(DEFAULT_COLOR);