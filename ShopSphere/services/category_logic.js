// import { fetchProductData, fetchProductCategories, fetchProductByCategory } from "../service/product_service.js";
// import { urlObject } from "../util/url.js";
// import { loadMore } from "./more_feature.js";

import { fetchProductData, fetchProductCategories, fetchProductByCategory } from "./product_service.js";
import { urlObject } from "../utils/url.js";
import { loadMore } from "./more_feature.js";

const categoryButton = document.querySelector("#open-sidebar-button");
const categorySideBar = document.querySelector("#category-side-bar");
const body = document.querySelector("body");
let selectedCategoryList = [];

async function categoryLogic() {
  const categoryList = await fetchProductCategories(urlObject.categoryListUrl);
  categoryList.unshift("All");
  const formattedCategoryList = formatCategory(categoryList);
  addCategoryList(formattedCategoryList, categoryList);
  categorySideBarLogic(categoryList);
}

function formatCategory(categoryList) {
  return categoryList.map(category => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
}

function addCategoryList(formattedCategoryList, originalCategoryList) {
  formattedCategoryList.forEach((category, index) => {
    const categoryItem = document.createElement("div");
    categoryItem.className = "category-item";
    categoryItem.innerHTML = `
      <input id="checkbox-${index}" type="checkbox" data-id="${index}" class="category-checkbox"/>
      <label data-index="${index}" for="checkbox-${index}">${category}</label>
    `;
    categorySideBar.appendChild(categoryItem);
    if (index === 0) {
      allCategory(originalCategoryList[0]);
    }
  });
}

function categorySideBarLogic(originalCategoryList) {
  categoryButton.addEventListener("click", () => {
    categorySideBar.style.display = "flex";
    categorySideBar.classList.toggle("show");
    categorySideBar.classList.toggle("hide");
  });

  body.addEventListener("click", (event) => {
    const target = event.target;
    if (!categorySideBar.contains(target) && target !== categoryButton) {
      if (categorySideBar.classList.contains("show")) {
        categorySideBar.classList.toggle("show");
        categorySideBar.classList.toggle("hide");
      }
    }
  });

  categorySideBar.addEventListener("change", (event) => {
    if (event.target.classList.contains("category-checkbox")) {
      const isChecked = event.target.checked;
      const categoryLabel = event.target.nextElementSibling;
      const categoryName = categoryLabel.textContent.trim();
      const selectedIndex = categoryLabel.getAttribute("data-index");
      const originalCategory = originalCategoryList[selectedIndex];

      if (isChecked) {
        if (selectedIndex == 0) {
          allCategory("All");
        } else {
          allCategory(originalCategory);
          selectedCategoryList.push(originalCategory);
          categoryLabel.classList.add("selected");
        }
      } else {
        selectedCategoryList = selectedCategoryList.filter(category => category !== originalCategory);
        categoryLabel.classList.remove("selected");
      }

      if (selectedCategoryList.length === 0) {
        fetchProductData(urlObject.productDataUrl);
        allCategory("All");
      } else {
        fetchProductByCategory(urlObject.categoryUrl, selectedCategoryList);
      }
    }
  });
}

function allCategory(category) {
  const categoryCheckList = document.querySelectorAll(".category-checkbox");
  if (category === "All") {
    categoryCheckList.forEach((categoryCheck, index) => {
      categoryCheck.checked = index === 0;
    });
    selectedCategoryList = [];
    fetchProductData(urlObject.productDataUrl).then(data => {
      if (data) {
        loadMore(true);
      } else {
        loadMore(false);
      }
    });
  } else {
    loadMore(false);
    categoryCheckList[0].checked = false;
  }
}

export { categoryLogic };
