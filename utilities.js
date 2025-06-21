console.log("utilities js connected");

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseFloat(price);
  return convertedPrice;
}

function updateTotalCost(value) {
  const totalCost = getConvertedValue("total-cost");
  console.log(totalCost);

  const sum = totalCost + parseFloat(value);
  document.getElementById("total-cost").innerText = sum;
}
