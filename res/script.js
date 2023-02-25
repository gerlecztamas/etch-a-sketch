createGrid("","");
paintIt();

let generate = document.querySelector("#generate");
generate.addEventListener("click", event => {
    let xgrid = document.getElementById("xgrid").value;
    let ygrid = document.getElementById("ygrid").value;
    createGrid(xgrid,ygrid);
});

let clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);

function createGrid(x, y){
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
    
    for(let i = 0; i < y; i++){
        let newLine = document.createElement("div");
        newLine.style.display = "flex";
        mainGrid.appendChild(newLine);
        for(let j = 0; j < x; j++){
            let newGrid = document.createElement("div");
            newGrid.classList.add("gridsquare");
            newLine.appendChild(newGrid);
        }
    }
    paintIt();
}

function clearGrid(){
let grids = document.querySelectorAll(".gridsquare");
grids.forEach(function(item){
    item.style.backgroundColor = "gray";
});
paintIt();
}

let whit = document.querySelector("#whit");
whit.addEventListener("click", whitee);

function whitee(){
    let grids = document.querySelectorAll(".gridsquare");
    grids.forEach(function(item){
        item.addEventListener("mouseover", event => {
        item.style.backgroundColor = "white";
        })
    });
}

function paintIt(){
    let grids = document.querySelectorAll(".gridsquare");
    grids.forEach(function(item){
        item.addEventListener("mouseover", event => {
        item.style.backgroundColor = "black";
        })
    });
}
