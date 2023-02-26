const DEFAULT_COLOR = "#000000";
createGrid("","");
paintIt(DEFAULT_COLOR);


let clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);

function changeGrid(){
    let gridNumber = document.getElementById("grid-number").value;
    createGrid(gridNumber, gridNumber);
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

function createGrid(x, y){
    if(x > 100 || y > 100){
        x = 100;
        y = 100;
    }
    let mainGrid = document.querySelector(".grid");
    while (mainGrid.firstChild) {
        mainGrid.firstChild.remove();
    }
    if (x === "" && y === ""){
        x = 16;
        y = 16;
    }
    else if (x === ""){
        x = y;
    }
    else if(y === ""){
        y = x;
    }

    let gridSize = 500 / x;
    
    for(let i = 0; i < y; i++){
        let newLine = document.createElement("div");
        newLine.style.display = "flex";
        mainGrid.appendChild(newLine);
        for(let j = 0; j < x; j++){
            let newGrid = document.createElement("div");
            newGrid.style.height = `${gridSize}px`;
            newGrid.style.width = `${gridSize}px`;
            newGrid.classList.add("gridsquare");
            newLine.appendChild(newGrid);
        }
    }
    paintIt("#000000");
}

function clearGrid(){
let grids = document.querySelectorAll(".gridsquare");
grids.forEach(function(item){
    item.style.backgroundColor = "white";
});
paintIt("#000000");
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
