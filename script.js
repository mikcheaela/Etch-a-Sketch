const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const grid = document.querySelector(".new-grid");
const root = document.querySelector(":root");
const containerWidth = 720;
const containerHeight = 784; 
let currentSize = 16;

console.log(containerWidth);

function colorSquare(){

    const squares = document.querySelectorAll(".square");
    squares.forEach((elem) => {
        elem.addEventListener("mouseover", () => {
            const squares = document.querySelectorAll(".square");
            elem.style.backgroundColor = "black";
        })
    })

}

function emptyGrid(size){

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(size);

}

function styleSquare(){
    const rows = document.querySelectorAll(".row");
    const squares = document.querySelectorAll(".square");

    rows.forEach((elem) => {
        elem.style.height = (containerHeight / currentSize) + "px";
    })

    squares.forEach((elem) => {
        elem.style.width = (containerWidth / currentSize) + "px";
    })

}

function createGrid(bounds){

    for (let i = 0; i < bounds; i++){
        const row = container.appendChild(document.createElement("div"));
        row.classList.add("row");
        for (let j = 0; j < bounds; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
    colorSquare();
    styleSquare();
}

createGrid(16);

grid.addEventListener("click", () => {
    let size = prompt("What dimension would you like your grid to be? (Less than 100)");
    currentSize = size;
    emptyGrid(currentSize);
})

reset.addEventListener("click", () => {
    emptyGrid(currentSize);
})



