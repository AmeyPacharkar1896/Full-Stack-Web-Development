const restaurantData = {
  menu: {
    items: [
      // Starters
      {
        id: 1,
        name: "Paneer Tikka",
        category: "Starters",
        description: "Soft paneer cubes marinated in spices and grilled to perfection.",
        price: 200,
        spiceLevel: "Medium",
        ingredients: ["Paneer", "Yogurt", "Spices", "Bell Pepper"],
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/1403309689/photo/paneer-tikka.jpg?s=612x612&w=0&k=20&c=uId3C6OiAhomzkeIjHULig7yDY9H3HjE6hjhmVsIkJw="
      },
      {
        id: 2,
        name: "Vegetable Spring Rolls",
        category: "Starters",
        description: "Crispy rolls stuffed with seasoned vegetables served with sweet chili sauce.",
        price: 180,
        spiceLevel: "Low",
        ingredients: ["Cabbage", "Carrot", "Bell Pepper", "Spring Roll Wrapper"],
        isPopular: false,
        imageURL: "https://img.freepik.com/premium-photo/spring-rolls_951133-11715.jpg?size=626&ext=jpg"
      },
      {
        id: 3,
        name: "Hara Bhara Kabab",
        category: "Starters",
        description: "Spinach and green pea patties with a crispy exterior.",
        price: 160,
        spiceLevel: "Mild",
        ingredients: ["Spinach", "Green Peas", "Potato", "Spices"],
        isPopular: false,
        imageURL: "https://t3.ftcdn.net/jpg/04/04/80/08/360_F_404800870_k24EEvETocyb0mgn4K4lczeB9soSfE0G.jpg"
      },
      {
        id: 4,
        name: "Paneer Pakora",
        category: "Starters",
        description: "Fried paneer fritters with a spicy coating.",
        price: 190,
        spiceLevel: "Medium",
        ingredients: ["Paneer", "Besan (Chickpea Flour)", "Spices", "Oil"],
        isPopular: false,
        imageURL: "https://www.harighotra.co.uk/images/recipes/Oct16/paneer_pakora_landscape.jpg"
      },
      {
        id: 5,
        name: "Aloo Tikki",
        category: "Starters",
        description: "Crispy spiced potato patties served with chutney.",
        price: 120,
        spiceLevel: "Mild",
        ingredients: ["Potato", "Spices", "Coriander"],
        isPopular: true,
        imageURL: "https://media.gettyimages.com/id/1204866803/photo/indian-potato-patties-aloo-tikki-served-with-yogurt-close-up-in-a-dish-horizontal-top-view.jpg?b=1&s=612x612&w=0&k=20&c=dGr7SZQWgF9SnK6e03yGz0SjnUgaiDkxGF1GvYufP_I="
      },
      {
        id: 6,
        name: "Dhokla",
        category: "Starters",
        description: "Steamed spongy cake made from fermented rice and chickpea flour.",
        price: 150,
        spiceLevel: "Low",
        ingredients: ["Rice Flour", "Chickpea Flour", "Yogurt", "Spices"],
        isPopular: false,
        imageURL: "https://media.gettyimages.com/id/596680614/fr/photo/dhokla.jpg?s=612x612&w=0&k=20&c=N0N6AAN5sbio6sIG_XtOIEX2JqOW2jvt-hblLJ8WYDg="
      },
      {
        id: 7,
        name: "Samosa",
        category: "Starters",
        description: "Crispy pastry filled with spiced potatoes and peas.",
        price: 130,
        spiceLevel: "Medium",
        ingredients: ["Potato", "Peas", "Spices", "Pastry"],
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0="
      },

      // Main Course
      {
        id: 8,
        name: "Paneer Butter Masala",
        category: "Main Course",
        description: "Paneer cubes in a creamy, rich tomato-based gravy.",
        price: 300,
        spiceLevel: "Mild",
        ingredients: ["Paneer", "Tomato", "Cream", "Spices"],
        isPopular: true,
        imageURL: "https://cdn1.foodviva.com/static-content/food-images/curry-recipes/paneer-butter-masala-recipe/paneer-butter-masala-recipe.jpg"
      },
      {
        id: 9,
        name: "Dal Makhani",
        category: "Main Course",
        description: "Slow-cooked black lentils in a buttery, creamy sauce.",
        price: 220,
        spiceLevel: "Mild",
        ingredients: ["Black Lentils", "Cream", "Butter", "Spices"],
        isPopular: false,
        imageURL: "https://media.istockphoto.com/id/1461228644/photo/dal-makhani-with-naan.jpg?s=612x612&w=0&k=20&c=qQ75qib9gDceIt_RZvb-NNaZK6hqkD-Ox9pibc6f8Kk="
      },
      {
        id: 10,
        name: "Mixed Vegetable Curry",
        category: "Main Course",
        description: "A delightful mix of seasonal vegetables cooked in Indian spices.",
        price: 250,
        spiceLevel: "Medium",
        ingredients: ["Carrot", "Beans", "Potato", "Cauliflower", "Spices"],
        isPopular: false,
        imageURL: "https://media.gettyimages.com/id/1279336403/photo/vegetable-curry-with-eggplant-and-rice.jpg?s=612x612&w=0&k=20&c=OnfBaFJdXaH98oVPkFUYNs6-68QzalhGkljZ7r1Nke8="
      },
      {
        id: 11,
        name: "Palak Paneer",
        category: "Main Course",
        description: "Paneer cubes in a mildly spiced spinach gravy.",
        price: 280,
        spiceLevel: "Mild",
        ingredients: ["Paneer", "Spinach", "Spices"],
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/1767307769/photo/saag-paneer-indian-cuisine.jpg?s=612x612&w=0&k=20&c=-TUK1Jf7mOTXLeBFyu5yOvXExdU7dFTCShSJR44m-Ag="
      },
      {
        id: 12,
        name: "Chana Masala",
        category: "Main Course",
        description: "Chickpeas cooked in a tangy tomato-based gravy.",
        price: 200,
        spiceLevel: "Medium",
        ingredients: ["Chickpeas", "Tomato", "Onion", "Spices"],
        isPopular: false,
        imageURL: "https://media.istockphoto.com/id/520665103/photo/chana-masala-gram-dish.jpg?s=612x612&w=0&k=20&c=Re7PUM8o2wn5ft3Hoz8pEm1XNzoO-nhN0X7Fp4jWeg8="
      },
      {
        id: 13,
        name: "Baingan Bharta",
        category: "Main Course",
        description: "Smoky roasted eggplant cooked with tomatoes and spices.",
        price: 210,
        spiceLevel: "Medium",
        ingredients: ["Eggplant", "Tomato", "Onion", "Spices"],
        isPopular: false,
        imageURL: "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX4/26JPFLEX4-jumbo-v3.jpg"
      },
      {
        id: 14,
        name: "Aloo Gobi",
        category: "Main Course",
        description: "Potatoes and cauliflower cooked in Indian spices.",
        price: 180,
        spiceLevel: "Mild",
        ingredients: ["Potato", "Cauliflower", "Spices"],
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/1216061194/photo/aloo-gobi.jpg?s=612x612&w=0&k=20&c=bJ5Z4ol7gF9v3CqXp24EPPgAVJzd0PeeBVsr9jT8x0w="
      },
      {
        id: 15,
        name: "Malai Kofta",
        category: "Main Course",
        description: "Fried vegetable balls in a rich, creamy gravy.",
        price: 270,
        spiceLevel: "Medium",
        ingredients: ["Potato", "Paneer", "Cream", "Spices"],
        isPopular: false,
        imageURL: "https://t3.ftcdn.net/jpg/08/43/45/54/360_F_843455473_NQVsoDfB9SCQSXhYVI4HHDcfRAfDecoc.jpg"
      },

      // Bread
      {
        id: 16,
        name: "Butter Naan",
        category: "Bread",
        description: "Soft, fluffy naan brushed with butter.",
        price: 40,
        isPopular: true,
        imageURL: "https://media.gettyimages.com/id/1558688308/photo/naan-bread.jpg?s=612x612&w=0&k=20&c=Fxf36rnB-34dfX8IPRTPuyCl4HQbUh9OZFntVyz7pLM="
      },
      {
        id: 17,
        name: "Garlic Naan",
        category: "Bread",
        description: "Naan topped with fresh garlic and cilantro.",
        price: 50,
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/1265053695/photo/butter-naan.jpg?s=612x612&w=0&k=20&c=XGyNbHk_1_xapjVmvQiq7ibBW1XRN91IP9fRRSct5Y4="
      },
      {
        id: 18,
        name: "Tandoori Roti",
        category: "Bread",
        description: "Traditional roti baked in the tandoor oven.",
        price: 30,
        isPopular: false,
        imageURL: "https://t3.ftcdn.net/jpg/07/31/15/66/360_F_731156638_Fb9ai9xj8L2H6Vh8svRd2qIi4hCW65JU.jpg"
      },
      {
        id: 19,
        name: "Stuffed Paratha",
        category: "Bread",
        description: "Paratha filled with spiced potato or paneer filling.",
        price: 90,
        isPopular: true,
        imageURL: "https://media.gettyimages.com/id/1413108980/photo/amritsari-kulche-and-chole.jpg?s=612x612&w=0&k=20&c=FEdgjlTGZ2qnAt1tM5suLJHL8aC4xqZHC6v8esqMLE4="
      },
      {
        id: 20,
        name: "Lachha Paratha",
        category: "Bread",
        description: "Layered, flaky paratha.",
        price: 80,
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM="
      },
      {
        id: 21,
        name: "Naan",
        category: "Bread",
        description: "Classic soft flatbread baked in a tandoor.",
        price: 40,
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM="
      },
      //Rice and Biryani
      {
        id: 22,
        name: "Vegetable Biryani",
        category: "Rice & Biryani",
        description: "Flavored basmati rice cooked with mixed vegetables and aromatic spices.",
        price: 200,
        spiceLevel: "Medium",
        ingredients: ["Basmati Rice", "Vegetables", "Spices"],
        isPopular: true,
        imageURL: "https://www.seriouseats.com/thmb/36S_SMZg255k-1kX0cYEJgGG2zY=/375x250/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__02__20120205-chickpea-potato-spinach-jalfrezi1-ce2839556b294c61ac71e4a96627301f.jpg"
      },
      {
        id: 23,
        name: "Jeera Rice",
        category: "Rice & Biryani",
        description: "Basmati rice tempered with cumin seeds.",
        price: 100,
        isPopular: false,
        imageURL: "https://media.gettyimages.com/id/1480024662/photo/jeera-rice.jpg?s=612x612&w=0&k=20&c=XLIcVudyZ_4l5O_4PWZGENzoeusMPWNOXPz_c7OKVP8="
      },
      {
        id: 24,
        name: "Veg Fried Rice",
        category: "Rice & Biryani",
        description: "Stir-fried rice with mixed vegetables and soy sauce.",
        price: 180,
        spiceLevel: "Medium",
        ingredients: ["Rice", "Carrot", "Bell Pepper", "Soy Sauce"],
        isPopular: true,
        imageURL: "https://t3.ftcdn.net/jpg/07/90/57/30/360_F_790573097_ARS4y8aFx3iAaamourFacJkSgapa1v0q.jpg"
      },
      // Desserts
      {
        id: 25,
        name: "Gulab Jamun",
        category: "Desserts",
        description: "Soft, round dumplings soaked in warm sugar syrup.",
        price: 120,
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/521802535/photo/gulab-jamun-12.jpg?s=612x612&w=0&k=20&c=dQvTijrNMY4tFhu4Oq1u1p5ra3ruxd6Sdl6ziIZL2Kw="
      },
      {
        id: 26,
        name: "Rasgulla",
        category: "Desserts",
        description: "Spongy, sweet cheese balls soaked in syrup.",
        price: 100,
        isPopular: false,
        imageURL: "https://media.gettyimages.com/id/1474105355/photo/rasgulla.jpg?s=612x612&w=0&k=20&c=6N3t3h_rRse59gF5rbbedB51tR9wSVgDMW9LwLh0pv8="
      },
      {
        id: 27,
        name: "Jalebi",
        category: "Desserts",
        description: "Crispy, deep-fried sweets soaked in sugary syrup.",
        price: 110,
        isPopular: true,
        imageURL: "https://media.gettyimages.com/id/1482998126/photo/jalebi.jpg?s=612x612&w=0&k=20&c=MzHVWqwxXN76RAjM8kvyNPpuqW14asFRpRH_KTVcbjY="
      },
      {
        id: 28,
        name: "Kheer",
        category: "Desserts",
        description: "Sweet rice pudding flavored with cardamom and saffron.",
        price: 130,
        isPopular: false,
        imageURL: "https://media.gettyimages.com/id/1336519511/photo/kheer-or-payasam-dessert.jpg?s=612x612&w=0&k=20&c=_RgiDNn16jF2gBvlW8WeQdhZVW_EWBfiLCc9BtChpAw="
      },
      {
        id: 29,
        name: "Kulfi",
        category: "Desserts",
        description: "Traditional Indian ice cream made with condensed milk and cardamom.",
        price: 150,
        isPopular: false,
        imageURL: "https://media.istockphoto.com/id/521233391/photo/kulfi-falooda-2.jpg?s=612x612&w=0&k=20&c=6PVWTK9gKRvf55KsWelvNBo6DUL22nuMbSmnX_oBHWA="
      },
      {
        id: 30,
        name: "Carrot Halwa (Gajar ka Halwa)",
        category: "Desserts",
        description: "A rich, sweet dessert made with grated carrots, milk, and dry fruits.",
        price: 140,
        isPopular: true,
        imageURL: "https://media.gettyimages.com/id/1304212726/photo/carrot-halwa.jpg?s=612x612&w=0&k=20&c=dsza2Qgx3KGA4kP7E6x7cct0yLZHHvvTGX5ksJDJRr4="
      },
      {
        id: 31,
        name: "Mango Lassi",
        category: "Desserts",
        description: "A refreshing yogurt-based drink with mango pulp.",
        price: 180,
        isPopular: false,
        imageURL: "https://media.gettyimages.com/id/997116908/photo/mango-lassi-mango-smoothie.jpg?s=612x612&w=0&k=20&c=U0yznj-4cm1upkKsWxCWKU1V4Ypt0ZJaAaEgH9-mUNM="
      },
      // Beverages
      {
        id: 32,
        name: "Masala Chai",
        category: "Beverages",
        description: "A spiced tea made with milk, tea leaves, and aromatic spices.",
        price: 50,
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/1199243472/photo/chai-tea-latte.jpg?s=612x612&w=0&k=20&c=LQ2-GubaDiwz0ON62OA5BzIY_EtcJc5YOxiGxf7sKN4="
      },
      {
        id: 33,
        name: "Lemon Mint Cooler",
        category: "Beverages",
        description: "A refreshing cold drink made with lemon and fresh mint leaves.",
        price: 80,
        isPopular: true,
        imageURL: "https://cdn.pixabay.com/photo/2017/05/10/05/22/beverage-2299926_640.jpg"
      },
      {
        id: 34,
        name: "Sweet Lassi",
        category: "Beverages",
        description: "A traditional yogurt-based drink, sweetened and flavored with rosewater.",
        price: 90,
        isPopular: false,
        imageURL: "https://media.istockphoto.com/id/517241457/photo/lassi.jpg?s=612x612&w=0&k=20&c=nHNjnGB7a3zoeWEywW7c5tsWxJDdIUZLbNhQ2WM4mOU="
      },
      {
        id: 35,
        name: "Jal Jeera",
        category: "Beverages",
        description: "A spicy, tangy drink made with cumin, mint, and lemon.",
        price: 60,
        isPopular: false,
        imageURL: "https://www.jeyashriskitchen.com/wp-content/uploads/2013/05/IMG_7659-1068x712.jpg"
      },
      {
        id: 36,
        name: "Tea",
        category: "Beverages",
        description: "Traditional Indian black tea served with milk and sugar.",
        price: 40,
        isPopular: false,
        imageURL: "https://media.gettyimages.com/id/693893647/photo/tea-cup-bag.jpg?s=612x612&w=0&k=20&c=ZeYpRu1bvYiZVtX4U6orMlNAdU9bqtgy5qRYov6bXKA="
      },
      {
        id: 37,
        name: "Coconut Water",
        category: "Beverages",
        description: "Natural coconut water served fresh.",
        price: 100,
        isPopular: true,
        imageURL: "https://media.istockphoto.com/id/598054528/photo/coconut-water.jpg?s=612x612&w=0&k=20&c=OsQPEcMsp_ArkTYyZOTokN3mTfYdR4FJw2oAni7Mzlo="
      }
    ],
    categories: [
      // "Popular",
      "All",
      "Starters",
      "Main Course",
      "Bread",
      "Rice & Biryani",
      "Desserts",
      "Beverages",
    ],
  },
  displayMenu: (menuCategories = restaurantData.menu.categories, sliceNumber = 1) => {
    menuCategories = menuCategories.slice(sliceNumber);
    const menuDiv = document.getElementById('menu-container');
    const menuItems = restaurantData.menu.items;
    //add category
    menuCategories.forEach(category => {
      const menuCategory = document.createElement('div');
      menuCategory.classList.add("menu-category");
      menuCategory.innerHTML = `<p>
          ${category}
        </p>`
      const menuCategoryContainer = document.createElement('div');
      menuCategoryContainer.classList.add("menu-category-container");
      //add items now for the category
      menuItems.forEach(item => {
        if (item.category == category) {
          const menuItem = document.createElement('div');
          menuItem.classList.add("menu-item");
          menuItem.innerHTML = ` <p>${item.id}</p>
          <img src=${item.imageURL}
                  alt=${item.name}>
                <div class="menu-item-row-1">
                  <p>${item.name}</p>
                  <p>₹${item.price}</p>
                  <p>${item.description}</p>
                </div>
                <div class="add-item-container">
                  <div class="add-item">
                    Add Item
                  </div>
                </div>`;
          menuCategoryContainer.appendChild(menuItem);
        }
      });
      menuCategory.appendChild(menuCategoryContainer);
      menuDiv.appendChild(menuCategory);
    });
  }
}

export { restaurantData };