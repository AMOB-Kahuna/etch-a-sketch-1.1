const container = document.querySelector(".container");
const gridSize = 0;
const count = prompt("Enter grid size: ");

function createGrid(){
    
    
    while (count > 30) {
        count =prompt("input must be between the range of 1 - 100 (max = 100):");
    }
    
    if (count <= 30) {
        const counts = count * count
        container.setAttribute("style", `height: ${count*18}px; width: ${count*18}px;`);
        for (let i = 0; i < counts; i++) {
            let grid = document.createElement("div");
            grid.classList.toggle("box");
            grid.setAttribute("style", "height: 16px; width: 16px; border: solid 1px black; background-color: white;");
            container.appendChild(grid);
        }
    }
}

createGrid();