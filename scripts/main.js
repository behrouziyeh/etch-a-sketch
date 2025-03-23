const grid = document.querySelector('.grid');

function generateRandomColor() {
    // create Red, Green, Values
    let r = Math.floor(Math.random) * 256;
    let g = Math.floor(Math.random) * 256;
    let b = Math.floor(Math.random) * 256;
    return `rgb(${r}, ${g}, ${b})`;
}

function setupCells(amount) {
    for (let i = 0; i <= amount; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', `cell${i}`);
        cell.addEventListener('hover', () => {
            cell.style.backgroundColor = generateRandomColor();
        });
        cell.style.width = (512 / amount) + "px";
        cell.style.height = (512 / amount) + "px";
    };
}