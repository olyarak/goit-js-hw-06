function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  let boxesToCreate = [];
  for (let i = 0; i < amount; i += 1) {
    const divItem = document.createElement("div");
    divItem.style.width = `${30 + 10 * i}px`;
    divItem.style.height = `${30 + 10 * i}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    boxesToCreate.push(divItem);
  }
  return boxesToCreate;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd);
});

destroyBtn.addEventListener("click", destroyBoxes);
