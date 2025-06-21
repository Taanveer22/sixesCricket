console.log("utilities js connected");

// f 01
function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseFloat(price);
  return convertedPrice;
}

// f 02
function updateTotalCost(playerPrice) {
  console.log(playerPrice);
  let convertedPlayerPrice = parseFloat(playerPrice);

  // let totalCost = document.getElementById("total-cost").innerText;
  // let convertedTotalCost = parseFloat(totalCost);

  let convertedTotalCost = getConvertedValue("total-cost");

  const sum = convertedTotalCost + convertedPlayerPrice;
  document.getElementById("total-cost").innerText = sum;
}

// f 03
function updateGrandTotal() {
  let convertedTotalCost = getConvertedValue("total-cost");

  document.getElementById("grand-total").innerText = convertedTotalCost;
}
