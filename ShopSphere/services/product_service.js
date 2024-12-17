async function fetchProductData(url, limit = 30, skip = 0, isDisplay = true) {
  try {
    const fetchUrl = `${url}?limit=${limit}&skip=${skip}`;
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const productData = await response.json();
    const products = productData.products;

    if (isDisplay) {
      displayProductData(products, skip > 0);
    }

    return productData;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

async function fetchProductCategories(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching categories: ${error}`);
  }
}

async function fetchProductByCategory(url, categoryList) {
  try {
    let productDataArray = [];
    for (const category of categoryList) {
      const response = await fetch(`${url}/${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const productData = await response.json();
      productDataArray = [...productDataArray, ...productData.products];
    }
    if (productDataArray.length > 0) {
      displayProductData(productDataArray);
    } else {
      document.querySelector("#product-container").innerHTML = '<p>No products available for selected categories.</p>';
    }
  } catch (error) {
    console.error(`Error fetching categories: ${error.message}`);
  }
}

async function fetchProductBySearchQuery(url, query) {
  try {
    const response = await fetch(`${url}${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const productData = await response.json();
    displayProductData(productData.products, false, 30);
  } catch (error) {
    console.error(`Error fetching search query: ${error}`);
  }
}

// Function to display product data

function displayProductData(productData, append = false, limit = 30) {
  const productContainer = document.querySelector("#product-container");

  // Clear products only if not appending
  if (!append) {
    productContainer.innerHTML = "";
  }

  // Display the product cards
  productData.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <div class="thumbnail">
        <img src="${product.thumbnail}" alt="${product.title}">
      </div>
      <div class="info">
        <h3 class="title">${product.title}</h3>
        <p class="brand">Brand: ${product.brand}</p>
        <p class="price">$${product.price} 
          <span class="discount">${product.discountPercentage}% OFF</span>
        </p>
        <p class="rating">${product.rating} ★</p>
        <p class="availability ${product.availabilityStatus.split(" ")[0]}">
          ${product.availabilityStatus}
        </p>
      </div>
      <div class="actions">
        <button data-id="${product.id}" class="view-details">View Details</button>
        <button data-id="${product.id}" class="add-to-cart">Add to Cart</button>
      </div>
    `;
    productContainer.appendChild(productCard);
  });
}

export { fetchProductData, fetchProductCategories, fetchProductByCategory, fetchProductBySearchQuery };