const container = document.querySelector("#container");

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