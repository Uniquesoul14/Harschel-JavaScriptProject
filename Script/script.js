let jumpToProductBtn = document.querySelectorAll(".jumpToPro");
let productUpdate = document.querySelector(".productUpdate");
let lowToHigh = document.getElementById("lowToHigh");
let highToLow = document.getElementById("highToLow")




async function getDataFromServer() {
 const res = await fetch(" http://localhost:3000/products");
  const data = await res.json();
  dataFilledInCard(data);

  return data;
}
getDataFromServer();

function dataFilledInCard(productExctractedData) {
  let pro = productExctractedData.map((productData, i) =>
    productCard(
      productData.productImg,
      productData.title,
      productData.price,
      productData.classics,
      productData.id
    )
  );
  productUpdate.innerHTML = pro.join(" ");
}

function productCard(image, title, price, classic, id) {
  const productCardUpdate = `<div class="col-lg-4 col-md-6 col-sm-6 productsCol p-0">
            <div class="productCard">
                <div class="productImg">
           <a href=./description.html?ID=${encodeURIComponent(id)}&${title}>   <img
                src=${image}
                alt=""
              /></a>
            </div>
            <div class="productDetail">
              <div class="color_container">
                <img
                  src="${classic[0]}"
                  alt=""
                />
                <img
                  src="${classic[1]}"
                  alt=""
                />
                 <img
                  src="${classic[2]}"
                  alt=""
                />
                 <img
                  src="${classic[3]}"
                  alt=""
                />
                 <img
                  src="${classic[4]}"
                  alt=""
                />
                 <img
                  src="${classic[5]}"
                  alt=""
                />
                 <img
                  src="${classic[6]}"
                  alt=""
                />
              </div>
              <h5>${title}</h5>
              <p>$${price}</p>
            </div>
            </div>
          </div>`;
  return productCardUpdate;
}

async function sortHighToLow(){
    let res = await getDataFromServer();
    console.log(res)
}


async function lth() {

  const res=await fetch("http://localhost:3000/products?_sort=price&_order=asc")
  const data = await res.json();
  dataFilledInCard(data)
  

}
async function htl() {

  const res=await fetch("http://localhost:3000/products?_sort=price&_order=desc")
  const data = await res.json();
  dataFilledInCard(data)
  

}

lowToHigh.addEventListener("click", ()=>{


  lth();

})

highToLow.addEventListener("click", ()=>{
  htl();
})

