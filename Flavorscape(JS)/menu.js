const menu = {
  "id": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "items": [
    "Paneer Butter Masala",
    "Butter Naan",
    "Masala Dosa",
    "Samosa",
    "Gulab Jamun",
  ],
  "prices": [250.0, 50.0, 180.0, 30.0, 60.0],
  "ordered": [0, 0, 0, 0, 0]
};

export let menuItems = menu["items"];
export let menuPrices = menu["prices"];
export let menuOrdered = menu["ordered"];

let i = 0;
export let menuString = `1. ${menuItems[i]} : ${menuPrices[i]}`;

for (i = 1; i < menuItems.length; i++) {
  menuString = `${menuString}\n${i + 1}. ${menuItems[i]} : ${menuPrices[i]}`;
}

let exitString = `\n${++i}. That would be all.Bill Please`;
menuString = menuString + exitString;