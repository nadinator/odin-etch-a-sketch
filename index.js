const container = document.querySelector(".container");
const width = window.innerWidth / 2;
const height = window.innerHeight / 2;

function createGrid() {
  let n = -1;
  while (n <= 0 || n > 100 || isNaN(n)) {
    n = prompt("Enter a number between 1 and 100");
  }

  let boxSize = Math.min(width, height) / n;

  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    for (let j = 0; j < n; j++) {
      const box = document.createElement("div");
      box.style.width = boxSize + "px";
      box.style.height = boxSize + "px";
      box.style.border = "solid 1px red";
      box.style.margin = "1px";
      box.style.boxSizing = "border-box";
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
      });
      row.appendChild(box);
    }
    container.appendChild(row);
  }
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
  Array.from(container.children)
    .filter((child) => child !== resetButton)
    .forEach((child) => container.removeChild(child));
  createGrid();
});

createGrid();