const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

function onCreateItem(array) {
  return array.map((item) => {
    const arrayItem = document.createElement("li");
    arrayItem.textContent = item;
    arrayItem.classList.add("item");
    return arrayItem;
  });
}

ingredientsEl.append(...onCreateItem(ingredients));
