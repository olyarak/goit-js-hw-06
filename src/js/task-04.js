let counterValue = 0;
const value = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}
