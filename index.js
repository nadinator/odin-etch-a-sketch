const container = document.querySelector(".container");

let n = -1;

while (n <= 0 || n > 100 || isNaN(n)) {
  n = prompt("Enter a number between 1 and 100");
}

// Row
for (let i = 0; i < n; i++) {
  // Column
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  for (let j = 0; j < n; j++) {
    const box = document.createElement("div");
    box.style.border = "solid 10px red";
    box.style.margin = "5px";
    row.appendChild(box);
  }
  container.appendChild(row);
}
