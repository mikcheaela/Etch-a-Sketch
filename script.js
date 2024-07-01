
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const grid = document.querySelector(".new-grid");
const root = document.querySelector(":root");
const colorPicker = document.querySelector("#picker");
const containerWidth = 784;
const containerHeight = 784; 
let isMouseDown = true;
let currentSize = 16;
let currentColor = "black";

console.log(containerWidth);

function autoClick(){
    $("download").click();
}

function colorSquare(){
    if (isMouseDown){
        const squares = document.querySelectorAll(".square");
        squares.forEach((elem) => {
            elem.addEventListener("mouseover", () => {
                const squares = document.querySelectorAll(".square");
                elem.style.backgroundColor = currentColor;
            })
        })
    }
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
    let size = +prompt("Enter a dimension for your new grid (Up to 100).");
    currentSize = size;
    emptyGrid(currentSize);
})

reset.addEventListener("click", () => {
    emptyGrid(currentSize);
})

colorPicker.addEventListener("change", (event) => {
    currentColor = event.target.value;
})

colorPicker.addEventListener("input", (event) => {
    currentColor = event.target.value;
})

$(document).ready(function(){
    const element = $(".container"); 
    $(".download ").on("click",  () => {
        html2canvas(element, {
            onrendered: function(canvas){
                const imageData = canvas.toDataURL("image/jpg");
                const newData =  imageData.replace(/^data:imageData\/jpg/, "data:application/octet-stream");
                $(".download").attr("download", "image.jpg").attr("href", newData); 
            }
        })
    })
})

