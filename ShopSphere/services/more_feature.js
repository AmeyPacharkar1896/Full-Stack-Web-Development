// Import necessary functions from service and utils
import { fetchProductData } from "../services/product_service.js" // Path is adjusted based on your file structure
import { urlObject } from "../utils/url.js"; // Path adjusted

function loadMore(isRequired = true, currentSkip = 0, limit = 30) {
  let loadMoreButton = document.querySelector("#load-more-button");

  if (isRequired) {
    if (!loadMoreButton) {
      loadMoreButton = document.createElement("button");
      loadMoreButton.id = "load-more-button";
      loadMoreButton.textContent = "Load More";
      document.body.appendChild(loadMoreButton);
    }

    loadMoreButton.addEventListener("click", async () => {
      currentSkip += limit;
      const fetchedData = await fetchProductData(urlObject.productDataUrl, limit, currentSkip);

      if (!fetchedData || fetchedData.length < limit) {
        loadMoreButton.style.display = "none";
      }
    });
  } else {
    if (loadMoreButton) {
      loadMoreButton.remove();
    }
  }
}

export { loadMore };
