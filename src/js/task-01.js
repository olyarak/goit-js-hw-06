const categoriesItemsEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
