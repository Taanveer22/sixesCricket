console.log("utilities js connected");

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseFloat(price);
  return convertedPrice;
}

function updateTotalCost(playerPrice) {
  console.log(playerPrice);

  let totalCost = document.getElementById("total-cost").innerText;
  
  let convertedTotalCost = parseFloat(totalCost);
  let convertedPlayerPrice = parseFloat(playerPrice);

  const sum = convertedTotalCost + convertedPlayerPrice;
  document.getElementById("total-cost").innerText = sum;
}
