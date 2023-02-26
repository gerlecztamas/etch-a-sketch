const DEFAULT_COLOR = "#000000";
const DEFAULT_SIZE = 16;



let clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);

function changeGrid(){
    let gridNumber = document.getElementById("grid-number").value;
    createGrid(gridNumber);
}

let colorChoice = document.getElementById("color-choice");
colorChoice.addEventListener("click", event => {
    let currentColor = document.getElementById("colorpicker").value;
    paintIt(currentColor);
});

let heha = document.getElementById("colorpicker");
heha.addEventListener("change", event => {
    paintIt(heha.value);
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
            newLine.appendChild(newGrid);
        }
    }
    paintIt(heha.value);
}

function clearGrid(){
let grids = document.querySelectorAll(".gridsquare");
grids.forEach(function(item){
    item.style.backgroundColor = "white";
});
paintIt(heha.value);
}

let eraser = document.querySelector("#eraser");
eraser.addEventListener("click", erase);

function erase(){
    let grids = document.querySelectorAll(".gridsquare");
    grids.forEach(function(item){
        item.addEventListener("mouseover", event => {
        item.style.backgroundColor = "white";
        })
    });
}

function paintIt(color){
    let grids = document.querySelectorAll(".gridsquare");
    grids.forEach(function(item){
        item.addEventListener("mouseover", event => {
        item.style.backgroundColor = color;
        })
    });
}

createGrid(DEFAULT_SIZE);
paintIt(DEFAULT_COLOR);