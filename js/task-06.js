// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxesContainer = document.getElementById("boxes");

// createBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes() {
//   const amount = Number(input.value);

//   if (amount >= 1 && amount <= 100) {
//     const boxes = [];

//     for (let i = 0; i < amount; i++) {
//       const box = document.createElement("div");
//       box.classList.add("box");
//       box.style.width = `${30 + i * 10}px`;
//       box.style.height = `${30 + i * 10}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       boxes.push(box);
//     }

//     boxesContainer.append(...boxes);
//     input.value = "";
//   } else {
//     alert("Please enter a number between 1 and 100.");
//   }
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }
// const input = document.querySelector("input");

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }

  clearBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }

  input.value = "";
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
