const input = document.getElementById("validation-input");
const length = Number(input.dataset.length);

input.addEventListener("blur", onValidateInput);

function onValidateInput(event) {
  if (input.value.split("").length === length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
