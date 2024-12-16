import { fetchProductData } from "../services/product_service.js"; // Correct path to product_service.js
import { urlObject } from "../utils/url.js"; // Correct path to url.js

const cartDropDown = document.querySelector("#cart-dropdown");
const closeOpenButton = document.querySelector("#close-open-button");

function viewCartDropDown(pathName) {
  let productContainerSelector;
  let cartClass;

  // Corrected pathnames according to the new file structure
  if (pathName === "/screens/view_detail_screen.html") {
    productContainerSelector = ".detail-add-to-cart";
    cartClass = ".detail-add-to-cart";
  } else if (pathName === "/index.html") { // Corrected to /index.html since index.html is now in root
    productContainerSelector = "#product-container";
    cartClass = ".add-to-cart";
  } else {
    console.error("Unsupported pathName:", pathName);
    return;
  }

  const productContainer = document.querySelector(productContainerSelector);
  if (!productContainer) {
    console.error("Product container not found for selector:", productContainerSelector);
    return;
  }

  productContainer.addEventListener("click", (event) => {
    if (pathName === "/index.html") { // Corrected to /index.html
      const productCard = event.target.closest(cartClass);
      if (productCard) {
        addCartDropDown(productCard);
      } else {
        console.log("Error in finding product card");
      }
    } else {
      const productDetailContainer = document.querySelector(".product-detail");
      if (productDetailContainer) {
        const cartProductData = getCartProductData();
        addCartDropDown(productDetailContainer, cartProductData);
      } else {
        console.error("Product detail container not found");
      }
    }
  });

  const viewCartButton = document.querySelector("#view-cart-button");
  viewCartButton.addEventListener("click", () => {
    window.location.href = "./screens/cart_screen.html";
  });
}

function getCartProductData() {
  return JSON.parse(localStorage.getItem("cartProductData")) || [];
}

function addCartDropDown(productCard, existingCartData = getCartProductData()) {
  if (productCard) {
    const productId = productCard.dataset.id;
    fetchProductData(`${urlObject.productDataUrl}/${productId}`, 30, 0, false).then((productDetailPageData) => {
      if (existingCartData) {
        existingCartData.push(productDetailPageData);
      } else {
        existingCartData = [productDetailPageData];
      }

      localStorage.setItem("cartProductData", JSON.stringify(existingCartData));

      renderCartDropdown(existingCartData);
    });
  }
}

function renderCartDropdown(cartProductData) {
  cartDropDown.style.display = "flex";
  cartDropDown.classList.add("show");
  closeOpenButton.style.display = "flex";

  const cartItemsContainer = document.querySelector("#cart-items");
  cartItemsContainer.innerHTML = "";

  cartProductData.slice(0, 5).forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("cart-item");
    productDiv.innerHTML = `
      <p>${product.title}</p>
      <p>Price: $${product.price}</p>
    `;
    cartItemsContainer.appendChild(productDiv);
  });

  const cartItemCount = cartProductData.length;
  const cartItemCountDisplay = document.querySelector("#cart-item-count");
  cartItemCountDisplay.textContent = cartItemCount;

  closeOpenButton.addEventListener("click", () => {
    if (cartDropDown.classList.contains("hide")) {
      cartDropDown.classList.remove("hide");
      cartDropDown.classList.add("show");
      closeOpenButton.innerText = ">";
    } else {
      cartDropDown.classList.remove("show");
      cartDropDown.classList.add("hide");
      closeOpenButton.innerText = "<";
    }
  });
}

function initializeCartDropdown() {
  const cartProductData = getCartProductData();
  
  if (cartProductData.length > 0) {
    renderCartDropdown(cartProductData);
  } else {
    cartDropDown.style.display = "none"; 
    const cartItemsContainer = document.querySelector("#cart-items");
    cartItemsContainer.innerHTML = "";
    const cartItemCountDisplay = document.querySelector("#cart-item-count");
    cartItemCountDisplay.textContent = 0;
  }
}

export { viewCartDropDown, initializeCartDropdown };
