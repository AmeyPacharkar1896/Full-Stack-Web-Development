// import { fetchProductData, fetchProductBySearchQuery } from "../service/product_service.js";
// import { viewCartDropDown, initializeCartDropdown } from "../service/view_cart_drop_down_logic.js";
// import { categoryLogic } from "../service/category_logic.js";
// import { urlObject } from "../util/url.js";

import { fetchProductData, fetchProductBySearchQuery } from "../services/product_service.js";
import { viewCartDropDown, initializeCartDropdown } from "../services/view_cart_drop_down_logic.js";
import { categoryLogic } from "../services/category_logic.js";
import { urlObject } from "../utils/url.js";

// Fetch and display products when page loads
fetchProductData(urlObject.productDataUrl);

// DOM Elements
const productContainer = document.querySelector("#product-container");
const searchInput = document.querySelector("#product-search-bar");

// Add event listener for product card clicks
productContainer.addEventListener("click", async (event) => {
  let productCard = event.target.closest(".view-details");
  if (productCard) {
    const productId = productCard.dataset.id;
    try {
      const productDetailPageData = await fetchProductData(`${urlObject.productDataUrl}/${productId}`, 30, 0, false);
      console.log(productDetailPageData);
      localStorage.setItem("selectedProduct", JSON.stringify(productDetailPageData));
      window.location.href = "./screens/view_detail_screen.html"; // Ensure this page exists
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }
});

// Initialize cart dropdown and category logic
viewCartDropDown("/index.html");
initializeCartDropdown();
categoryLogic();

// Debounced search input handler
let debounceTimer;
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim();
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    if (query) {
      fetchProductBySearchQuery(urlObject.searchUrl, query);
    } else {
      fetchProductData(urlObject.productDataUrl);
    }
  }, 300);
});
