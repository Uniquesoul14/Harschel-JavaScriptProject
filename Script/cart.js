let mainSection = document.getElementById("mainSection");
let totalCartPrice = document.getElementById("totalCartPrice");
let cartUpdateNumber = document.getElementById("cartUpdateNumber");

async function getCartData() {
  let res = await fetch("http://localhost:3000/cart");
  let data = await res.json();

  cartData(data);
  cartTotal(data);
  cartBadge(data);
}
getCartData();

function cartData(serverCartdata) {
  let toPrintData = serverCartdata.map((el, i) =>
    printcart(el.title, el.price, el.productImg, el.id, el.quantity)
  );

  mainSection.innerHTML = toPrintData.join(" ");

}

function printcart(title, price, image, id, quantitiy) {
  let cartDataUpdate = `
        <div class="col-lg-12 col-md-12 col-sm-12 cartDetail rounded-4  mt-4">
           <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-12">
             <img
              src=${image}
              alt=""
            />
           </div>
            <div class="priceDetail col-lg-6 col-md-6 col-sm-12">
                <h3>${title}</h3>
            <p>Price:$ ${price * quantitiy}</p>
            <button class="btn border-0 btn-dark rounded-0 inc " id=${id}>+</button>
              <span >Qty : ${quantitiy}</span>
             <button class="btn border-0 btn-dark rounded-0 dec" id=${id}>-</button>
           
             <button class="btn border-0 btn-dark rounded-0 btn-dark d-block mt-5 del " id=${id}>Remove</button>
            </div>
           </div>
            
          </div>`;
  return cartDataUpdate;
}

function handelQty(id, change) {
  fetch("http://localhost:3000/cart")
    .then((res) => res.json())
    .then((data) => {
      const find = data.find((el) => el.id == id);
      const currentQty = find.quantity + change;

      if (currentQty < 1) return;

      fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: currentQty }),
      })
        .then((res) => res.json)
        .then(() => {
          location.reload();
        })
        .catch((err) => console.log(err));
    });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("inc")) {
    const ID = e.target.id;
    handelQty(ID, 1);
  }
  // ;
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("dec")) {
    const ID = e.target.id;
    handelQty(ID, -1);
  }
  // const ID =e.target.id;
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    const ID = e.target.id;

    fetch(`http://localhost:3000/cart/${ID}`, {
      method: "DELETE",
    });
  }
  // ;
});

function cartTotal(data) {


  let total = 0;
  let cartTotaldata = data.map((el, i) => {
   
    total += el.price * el.quantity;
  });
  totalCartPrice.innerHTML = `Total Price: $${total}`;

  
}

function cartBadge(data) {
  let cartQty = 0;

  let cartBadgeNum = data.map((el, i) => {
    cartQty += el.quantity;
    
  });
  cartUpdateNumber.innerText = cartQty;
  console.log(cartQty);
}
