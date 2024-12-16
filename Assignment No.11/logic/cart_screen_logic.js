const cartContainer = document.querySelector("#cart-items");
const buyNowButton = document.querySelector("#buy-now");
const clearCartButton = document.querySelector("#clear-cart");

let cartData = JSON.parse(localStorage.getItem("cartProductData")) || [];

function renderCart() {
  cartContainer.innerHTML = "";

  if (cartData.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartData.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <p><strong>${product.title}</strong></p>
        <p>Price: $${parseFloat(product.price * (product.quantity || 1)).toFixed(2)}</p>
        <p>Quantity: <span class="item-quantity">${product.quantity || 1}</span></p>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control">
          <button class="decrease" data-index="${index}">-</button>
          <span class="quantity-display">${product.quantity || 1}</span>
          <button class="increase" data-index="${index}">+</button>
        </div>
        <button class="remove" data-index="${index}">Cancel</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
  });

  addEventListeners();
}

function addEventListeners() {
  const increaseButtons = document.querySelectorAll(".increase");
  const decreaseButtons = document.querySelectorAll(".decrease");
  const removeButtons = document.querySelectorAll(".remove");

  increaseButtons.forEach(button =>
    button.addEventListener("click", (e) => adjustQuantity(e, "increase"))
  );
  decreaseButtons.forEach(button =>
    button.addEventListener("click", (e) => adjustQuantity(e, "decrease"))
  );
  removeButtons.forEach(button =>
    button.addEventListener("click", removeItem)
  );
}

function adjustQuantity(event, action) {
  const index = event.target.dataset.index;

  if (action === "increase") {
    cartData[index].quantity = (cartData[index].quantity || 1) + 1;
  } else if (action === "decrease" && cartData[index].quantity > 1) {
    cartData[index].quantity--;
  }

  localStorage.setItem("cartProductData", JSON.stringify(cartData));
  renderCart();
}

function removeItem(event) {
  const index = event.target.dataset.index;
  cartData.splice(index, 1);

  localStorage.setItem("cartProductData", JSON.stringify(cartData));
  renderCart();
}

buyNowButton.addEventListener("click", () => {
  if (cartData.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you for your purchase!");
  cartData = [];
  localStorage.setItem("cartProductData", JSON.stringify(cartData));
  renderCart();
});

clearCartButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear your cart?")) {
    cartData = [];
    localStorage.setItem("cartProductData", JSON.stringify(cartData));
    renderCart();
  }
});

renderCart();
