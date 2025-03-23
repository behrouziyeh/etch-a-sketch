const grid = document.querySelector(".grid");

function generateRandomColor() {
    // create Red, Green, Values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setupCells(amount) {
    grid.replaceChildren("");
    for (let i = 1; i <= amount * amount; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", `cell${amount}`);
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = generateRandomColor();
        });
        cell.style.width = 512 / amount + "px";
        cell.style.height = 512 / amount + "px";
        grid.appendChild(cell);
    }
}

setupCells(16);
