const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

function createGrid(){

    for (let i = 0; i < 16; i++){
        const row = container.appendChild(document.createElement("div"));
        for (let j = 0; j < 16; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }

}

createGrid();

const squares = document.querySelectorAll(".square");

squares.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
        elem.style.backgroundColor = "black";
    })
})

reset.addEventListener("click", () => {
    squares.forEach((elem => {
        elem.style.backgroundColor = "white";
    }))
})
