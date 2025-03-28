const grid = document.querySelector(".grid");
const setSizeBtn = document.querySelector(".set-size-button");
const toggleBorderBtn = document.querySelector(".toggle-border-button");

function generateRandomColor() {
    // create Red, Green, Values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setupCells(amount) {
    if (amount > 100) return;
    grid.replaceChildren("");
    for (let i = 1; i <= amount * amount; i++) {
        const cell = document.createElement("div");
        cell.style.opacity = 0;
        cell.classList.add("cell", `cell${amount}`);
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = generateRandomColor();
            e.target.style.opacity = +e.target.style.opacity + 0.1;
        });
        cell.style.width = 32 / amount + "rem";
        cell.style.height = 32 / amount + "rem";
        grid.appendChild(cell);
    }
}

setSizeBtn.addEventListener("click", () =>
    setupCells(+prompt("Grid Size? (Max: 100)", 0))
);
toggleBorderBtn.addEventListener("click", () =>
    grid.classList.toggle("grid--border")
);
setupCells(16);
