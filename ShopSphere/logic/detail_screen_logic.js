// import { viewCartDropDown, initializeCartDropdown } from "../service/view_cart_drop_down_logic.js";
import { viewCartDropDown, initializeCartDropdown} from "../services/view_cart_drop_down_logic.js";

function displayProductDetails(product) {
  const productDetailContainer = document.querySelector("#product-detail-container");

  productDetailContainer.innerHTML = ""; // Clear previous content

  const productDetail = document.createElement("div");
  productDetail.className = "product-detail";
  productDetail.setAttribute('data-id', `${product.id}`);
  productDetail.innerHTML = `
    <div class="hero-section">
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="product-info">
          <h1 class="product-title">${product.title}</h1>
          <p class="product-description">${product.description}</p>
          <div class="product-pricing">
            <span class="product-price">$${product.price.toFixed(2)}</span>
            <span class="product-discount">${product.discountPercentage.toFixed(2)}% OFF</span>
          </div>
          <div class="product-rating">
            Rating: ${product.rating}⭐
          </div>
          <div class="product-stock-status">Stock: ${product.stock > 0 ? "In Stock" : "Out of Stock"}</div>
        </div>
      </div>
      <div class="details-section">
        <h2>Details</h2>
        <ul>
          <li>Brand: ${product.brand}</li>
          <li>Category: ${product.category}</li>
          <li>Weight: ${product.weight} kg</li>
          <li>Warranty: ${product.warrantyInformation}</li>
          <li>Shipping Info: ${product.shippingInformation}</li>
        </ul>
      </div>
      <div class="reviews-section">
        <h2>Customer Reviews</h2>
        <div class="reviews-container">
          ${product.reviews && product.reviews.length > 0 
            ? product.reviews
                .map(
                  (review) => `
                <div class="review">
                  <p><strong>${review.reviewerName}</strong>: ${review.comment}</p>
                  <p>Rating: ${review.rating}⭐</p>
                </div>
              `
                )
                .join("")
            : "<p>No reviews available.</p>"}
        </div>
      </div>
  `;
  productDetailContainer.appendChild(productDetail);
}

function loadProductDetails() {
  const productDetailData = JSON.parse(localStorage.getItem("selectedProduct"));
  if (productDetailData) {
    displayProductDetails(productDetailData);
    viewCartDropDown("/screens/view_detail_screen.html");
    initializeCartDropdown();
  } else {
    console.error("No product data found!");
    // You can redirect the user to another page or show an error message
    window.location.href = "/screens/index.html"; // Example redirect
  }
}

loadProductDetails();
