import { restaurantData } from "./restaurant_data.js";

restaurantData.displayMenu();

const nav = document.querySelector("#nav-bar");
const navContainer = document.createElement("div");
navContainer.id = "nav-container";
const menuCategories = restaurantData.menu.categories;

menuCategories.forEach((category, index) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  categoryDiv.innerText = `${category}`;
  navContainer.appendChild(categoryDiv);

  categoryDiv.addEventListener("click", () => {
    currentCategory.id = "";
    currentCategory = categoryDiv;
    currentCategory.id = "selected-category";
    const menuContainer = document.querySelector("#menu-container");
    menuContainer.innerHTML = '';
    (index == 0) ? restaurantData.displayMenu() : restaurantData.displayMenu([category], 0);
    addItemToBill();
  })
})

nav.appendChild(navContainer);

let currentCategory = navContainer.firstChild;
currentCategory.id = "selected-category"

function initBillState(paymentStatus = false) {
  if (billContainer.children.length == 1 || paymentStatus) {
    amountContainer.innerHTML = '';
    const billMenuItems = document.querySelectorAll(".bill-menu-item");
    billMenuItems.forEach((billMenuItem) => {
      billContainer.removeChild(billMenuItem);
    })
    initialText.style.display = "flex";
    totalBillAmount = 0;
  }
}

//adding item to bill
let totalBillAmount = 0;

const billContainer = document.querySelector("#bill-container");
const amountContainer = document.querySelector("#total-amount-container");
const initialText = document.querySelector("#empty-bill");
const popUpContainer = document.querySelector("#pop-up-container");
const emptyBill = document.querySelector("#empty-bill");
addItemToBill();

function addItemToBill() {
  const addMenuItems = document.querySelectorAll(".menu-item");

  // Add event listeners to "Add Item" buttons
  addMenuItems.forEach((addMenuItem) => {
    const addItemButtons = addMenuItem.children[addMenuItem.children.length - 1].firstElementChild;
    addItemButtons.addEventListener("click", () => {
      const menuItems = restaurantData.menu.items;
      // Add the selected item to the bill
      menuItems.forEach(menuItem => {
        if (menuItem.id == addMenuItem.firstElementChild.innerText) {
          addItemData(menuItem);
          quantityFunctionality(menuItem.price);
          const popUpSubmitButton = document.querySelector("#submit-button");
          popUpSubmitButton.addEventListener("click", () => {
            const totalSum = document.querySelector("#total-sum");
            let totalSumForBill = parseInt(totalSum.innerText.replace(/[^0-9]/g, ""), 10); // Remove non-numeric characters
            if (totalSumForBill == 0) {
              console.log("after totalSum")
              alert("Cant order 0 quantity of items");
              return;
            }
            const billMenuItem = document.createElement("div");
            billMenuItem.classList.add("bill-menu-item");

            // Populate the bill item
            billMenuItem.innerHTML = `
              <p class="bill-menu-item-name">${menuItem.name}</p>
              <p class="bill-menu-item-quantity">x${totalSumForBill / menuItem.price}</p>
              <p class="bill-menu-item-price">₹${totalSumForBill}</p>
              <div class="bill-menu-item-cancel">x</div>
              <div class="original-price" style="display:none">${menuItem.price}</div>
            `;

            // Append the new bill item
            initialText.style.display = "none";
            billContainer.appendChild(billMenuItem);

            // Add functionality to the "cancel" button
            const cancelButton = billMenuItem.querySelector(".bill-menu-item-cancel");
            cancelButton.addEventListener("click", () => {
              billContainer.removeChild(billMenuItem); // Safely remove this specific item
              totalBillAmount -= totalSumForBill; // Update total bill
              console.log(`Total bill: ₹${totalBillAmount}`);
              displayTotalBill(totalBillAmount);
              initBillState();
            });

            // Update total bill amount
            totalBillAmount += totalSumForBill;
            console.log(`Total bill: ₹${totalBillAmount}`);
            displayTotalBill(totalBillAmount);

            exitPopUp(popUpSubmitButton);
          });
          const popUpCancleButton = document.querySelector("#cancle-button");
          popUpCancleButton.addEventListener("click", () => {
            exitPopUp(popUpCancleButton);
          })
        }
      });
    });
  });
}

// #total-amount-container
function displayTotalBill(billAmount) {
  let finalBillAmount = billAmount + billAmount * (5 / 100);
  amountContainer.innerHTML = `
  <p>Amount</p>
        <p>${billAmount}</p>
        <p>Tax(5%)</p>${billAmount * 5 / 100}</p>
        <p>Total Amount</p>
        <p>₹${finalBillAmount}</p>
        <div id="generate-bill">Pay Bill</div>`;
  paymentBill(billAmount, finalBillAmount);
}

function paymentBill(billAmount, finalBillAmount) {
  const popUpData = document.querySelector("#pop-up-data");
  const payBill = document.querySelector("#generate-bill");
  payBill.addEventListener("click", () => {
    // alert(`Payment Successfull!!! Successfully paid ${billAmount}`);
    addItemBillData(billAmount, finalBillAmount);
    initBillState(true);
  })
}

function quantityFunctionality(initialSum) {
  const quantityColumnDatas = document.querySelector("#quantity-column-datas");
  console.log(document.querySelector("#quantity-column-datas"));

  // Use event delegation
  quantityColumnDatas.addEventListener("click", (event) => {
    if (event.target.classList.contains("quantity-button-plus")) {
      const quantityData = event.target.parentElement;
      console.log(quantityData);
      const children = quantityData.children;
      let quantityValue = parseInt(children[1].innerText);
      quantityValue++;
      children[1].innerText = quantityValue;

      let totalSumForBill = initialSum * quantityValue;
      const totalSum = document.querySelector("#total-sum");
      totalSum.innerText = `Total ₹${totalSumForBill}`;

    } else if (event.target.classList.contains("quantity-button-minus")) {
      const quantityData = event.target.parentElement;
      console.log(quantityData);
      const children = quantityData.children;
      let quantityValue = parseInt(children[1].innerText);
      if (quantityValue > 0) {
        quantityValue--;
        children[1].innerText = quantityValue;

        let totalSumForBill = initialSum * quantityValue;
        const totalSum = document.querySelector("#total-sum");
        totalSum.innerText = `Total ₹${totalSumForBill}`;

      } else {
        alert("You cant go below 0 for items");
      }
    }
  });
}

function exitPopUp(popUpSubmitButton = null, popUpCancleButton = null) {
  popUpContainer.addEventListener("click", (event) => {
    if (event.target === popUpContainer || (popUpSubmitButton != null && event.target === popUpSubmitButton) || (popUpCancleButton != null && event.target === popUpCancleButton)) {  // Ensure it's the outer container clicked
      event.stopPropagation();
      popUpContainer.style.display = "none";
    }
  })
}

function addItemData(menuItem) {
  popUpContainer.style.display = "flex";
  exitPopUp();
  console.log("after flex")
  const popUpData = document.querySelector("#pop-up-data");
  let ingredients = "No ingredients";
  if (menuItem.ingredients) {
    ingredients = menuItem.ingredients;
  }

  popUpData.innerHTML = `
          <div id="img-column">
        <img
          src="${menuItem.imageURL}"
          alt="${menuItem.name}">
        <div id="img-column-data">
          <div id="img-column-data-row">
            <p>${menuItem.name}</p>
            <p>${menuItem.category}</p>
          </div>
          <p>${menuItem.description}</p>
          <p>[${ingredients}]</p>
        </div>
      </div>
      <div id="quantity-column">
        <p>Quantity</p>
        <div id="quantity-column-datas">
          <div id="quantity-column-data">
              <p>${menuItem.name}</p>
              <div id="quantity">
              <div class="quantity-button-minus">-</div>
              <div class="quantity-value">0</div>
              <div class="quantity-button-plus">+</div>
              </div>
            </div>
        </div>
        <p id="total-sum">Total ₹${0}</p>
      </div>
      <div id="choice-container">
        <div id="cancle-button">Cancle</div>
        <div id="submit-button">Add Item</div>
      </div>
          `;
}

function addItemBillData(totalSum, finalTotalSum) {
  popUpContainer.style.display = "flex";
  exitPopUp();
  console.log("after flex")
  const popUpData = document.querySelector("#pop-up-data");
  const billContainer = document.querySelector("#bill-container");
  billContainer.removeChild(emptyBill);

  const children = billContainer.children;
  console.log(children);
  let childrenString = "";
  for (let i = 0; i < children.length; i++) {
    const currentChild = children[i]; // The current child element
    // console.log(`${currentChild.querySelector(".bill-menu-item-name")},
    // ${currentChild.querySelector(".bill-menu-item-quantity")},
    // ${currentChild.querySelector(".original-price")}
    // ${currentChild.querySelector(".bill-menu-item-price")}`)
    childrenString += `
    <tr>
      <td>${currentChild.querySelector(".bill-menu-item-name").textContent}</td>
      <td>${currentChild.querySelector(".bill-menu-item-quantity").textContent.replace(/[^0-9]/g, "")}</td>
      <td>${currentChild.querySelector(".original-price").textContent.replace(/[^0-9]/g, "")}</td>
      <td>${currentChild.querySelector(".bill-menu-item-price").textContent.replace(/[^0-9]/g, "")}</td>
    </tr>
  `;
  }

  popUpData.innerHTML = "";
  popUpData.innerHTML = `
  <table>
        <thead>
        <tr>
        <td colspan="4">
          Receipt
          </td>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>UnitPrice</td>
            <td>Total Price</td>
          </tr>
          ${childrenString}
          <tr>
            <td colspan="3">Total Amount</td>
            <td>${totalSum}</td>
          </tr>
          <tr>
            <td colspan="3">Tax(5%)</td>
            <td>${totalSum * 5/100}</td>
          </tr>
          <tr>
            <td colspan="3">Total (with gst)</td>
            <td>${finalTotalSum}</td>
          </tr>
        </tbody>
      </table>`;

  billContainer.appendChild(emptyBill);
}