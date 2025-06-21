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
  });
}

