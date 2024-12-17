import { menuItems, menuPrices, menuOrdered } from "./menu.js";

const displayBill = (menuLength = 0, totalSum = 0) => {
  let displayBill = "";
  if(totalSum != 0) {
    for (let i = 0; i < (menuLength - 1); i++) {
      if (menuOrdered[i] != 0) {
        displayBill = `${displayBill}${i + 1}. ${menuItems[i]}    ${menuOrdered[i]}   ${menuPrices[i]}\n`
      }
    }
  
    displayBill = `${displayBill}CGST   2.5%    ${(totalSum * (2.5 / 100))}\nSGST   2.5%    ${(totalSum * (2.5 / 100))}`;
    totalSum += (totalSum * 5 / 100);
  
    console.log(displayBill + "\n" + totalSum);
    alert(`Your bill are\nSr.   Item    Ordered   Prices\n${displayBill}\n\nTotal Bill ${totalSum}`);
    return totalSum;
  } else {
    alert("Something went Wrong.\nRegenerating bill");
    return totalSum;
  }
}

export { displayBill };