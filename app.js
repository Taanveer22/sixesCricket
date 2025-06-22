console.log("app js connected");

const entireAddBtns = document.getElementsByClassName("add-btn");
// console.log(entireAddBtns);

for (let singleAddBtn of entireAddBtns) {
  // console.log(singleAddBtn);
  singleAddBtn.addEventListener("click", function (event) {
    // console.log(event);
    console.log(event.target);
    // console.log(event.target.parentNode);
    // console.log(event.target.parentNode.childNodes);
    // console.log(event.target.parentNode.childNodes[1]);
    // console.log(event.target.parentNode.childNodes[1].innerText);

    const name = event.target.parentNode.childNodes[1].innerText;
    console.log(name);

    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    console.log(price);

    const category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;
    console.log(category);

    const selectedPlayersContainer = document.getElementById(
      "selected-players-container"
    );
    console.log(selectedPlayersContainer);

    // validation before update the navbar
    const maxPlayers = 6;
    const noPlayer = 0;

    const beforeLoadCart = getConvertedValue("cart");
    const berforeLoadLeft = getConvertedValue("left");
    // console.log(beforeLoadCart);
    // console.log(berforeLoadLeft);

    if (beforeLoadCart + 1 > maxPlayers || berforeLoadLeft - 1 < noPlayer) {
      alert("cart player limit over");
      return;
    }

    const totalBudget = getConvertedValue("budget");
    if (parseFloat(price) > totalBudget) {
      alert("budget is over");
      return;
    }

    // event.target related simple task
    event.target.setAttribute("disabled", false);
    event.target.parentNode.style.backgroundColor = "yellow";

    // update the navbar
    let convertedBudget = getConvertedValue("budget");
    console.log(convertedBudget);

    document.getElementById("budget").innerText =
      convertedBudget - parseFloat(price);

    let convertedCart = getConvertedValue("cart");
    document.getElementById("cart").innerText = convertedCart + 1;

    let convertedLeft = getConvertedValue("left");
    document.getElementById("left").innerText = convertedLeft - 1;

    // after update the navbar
    const afterLoadCart = getConvertedValue("cart");
    const afterLoadLeft = getConvertedValue("left");
    // console.log(afterLoadCart);
    // console.log(afterLoadLeft);

    // 1st step : create the elements
    const div = document.createElement("div");
    div.classList.add("selected-players");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    // 2nd step : set innerText of elements
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;

    // 3rd step : appendChild the elements
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedPlayersContainer.appendChild(div);

    updateTotalCost(price);
    updateGrandTotal();
  });
}

// function starts here......................

// f 03
function updateGrandTotal(status) {
  console.log(status);
  console.log(typeof status);

  let convertedTotalCost = getConvertedValue("total-cost");
  let couponCode = document.getElementById("coupon-code").value;

  if (typeof status == "undefined") {
    document.getElementById("grand-total").innerText = convertedTotalCost;
  } else {
    if (couponCode == "tiger420") {
      let discount = convertedTotalCost * 0.2;
      let discountedPrice = convertedTotalCost - discount;
      document.getElementById("grand-total").innerText = discountedPrice;
    } else {
      alert("please give valid coupon code");
    }
  }
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

// f 01
function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseFloat(price);
  return convertedPrice;
}
