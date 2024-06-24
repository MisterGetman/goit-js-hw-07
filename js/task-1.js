const categoriesElems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesElems.length}`);

categoriesElems.forEach(categoryElem => {
  const heading = categoryElem.querySelector('h2');
  console.log(`Category: ${heading.textContent}`);

  const subElems = categoryElem.querySelectorAll('li');
  console.log(`Elements: ${subElems.length}`);
});
