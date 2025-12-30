const desImg1 = document.getElementById("desImg1");
const desImg2 = document.getElementById("desImg2");
const desImg3 = document.getElementById("desImg3");
const desImg4 = document.getElementById("desImg4");
const desImg5 = document.getElementById("desImg5");
const desImg6 = document.getElementById("desImg6");
const desImg7 = document.getElementById("desImg7");
const desImg8 = document.getElementById("desImg8");
const desTitle = document.getElementById("desTitle");
const desPrice = document.getElementById("desPrice");
const desReviews = document.getElementById("desReviews");
const desColor = document.getElementById("desColor");
const desColorOpt = document.getElementById("desColorOpt");
const desDescription = document.getElementById("desDescription");

const colorClassic1 = document.getElementById("colorClassic1");
const colorClassic2 = document.getElementById("colorClassic2");
const colorClassic3 = document.getElementById("colorClassic3");
const colorClassic4 = document.getElementById("colorClassic4");
const colorClassic5 = document.getElementById("colorClassic5");
const colorClassic6 = document.getElementById("colorClassic6");
const colorClassic7 = document.getElementById("colorClassic7");
const colorClassic8 = document.getElementById("colorClassic8");
const colorLimEd1 = document.getElementById("colorLimEd1");
const colorLimEd2 = document.getElementById("colorLimEd2");
const colorLimEd3 = document.getElementById("colorLimEd3");
const colorLimEd4 = document.getElementById("colorLimEd4");
const colorLimEd5 = document.getElementById("colorLimEd5");
const colorLimEd6 = document.getElementById("colorLimEd6");
const colorLimEd7 = document.getElementById("colorLimEd7");
const colorLimEd8 = document.getElementById("colorLimEd8");
const addToCartButton = document.getElementById("addToCartButton");

let currentDesData;

const z = new URLSearchParams(window.location.search);
console.log(z.get("ID"));
const dataID = z.get("ID");

async function renderDesData() {
  let res = await fetch(`http://localhost:3000/products/${dataID}`);
  let singleDta = await res.json();
  currentDesData=singleDta;

  desImg1.setAttribute("src", singleDta.descriptionImages[0]);
  desImg2.setAttribute("src", singleDta.descriptionImages[1]);
  desImg3.setAttribute("src", singleDta.descriptionImages[2]);
  desImg4.setAttribute("src", singleDta.descriptionImages[3]);
  desImg5.setAttribute("src", singleDta.descriptionImages[4]);
  desImg6.setAttribute("src", singleDta.descriptionImages[5]);
  desImg7.setAttribute("src", singleDta.descriptionImages[6]);
  desImg8.setAttribute("src", singleDta.descriptionImages[7]);
  desTitle.innerText = singleDta.title;
  desPrice.innerText = `$${singleDta.price}`;
  desReviews.innerText = `Reviews : ${singleDta.reviews}`;
  desColor.innerText = `Color : ${singleDta.color}`;
  desColorOpt.innerText = `Option : ${singleDta.colorNumber}`;
  desDescription.innerText = `Option : ${singleDta.productDes}`;

  colorClassic1.setAttribute("src", singleDta.classics[0]);
  colorClassic2.setAttribute("src", singleDta.classics[1]);
  colorClassic3.setAttribute("src", singleDta.classics[2]);
  colorClassic4.setAttribute("src", singleDta.classics[3]);
  colorClassic5.setAttribute("src", singleDta.classics[4]);
  colorClassic6.setAttribute("src", singleDta.classics[5]);
  colorClassic7.setAttribute("src", singleDta.classics[6]);
  colorClassic8.setAttribute("src", singleDta.classics[7]);
  colorLimEd1.setAttribute("src", singleDta.limitedEdition[0]);
  colorLimEd2.setAttribute("src", singleDta.limitedEdition[1]);
  colorLimEd3.setAttribute("src", singleDta.limitedEdition[2]);
  colorLimEd4.setAttribute("src", singleDta.limitedEdition[3]);
  colorLimEd5.setAttribute("src", singleDta.limitedEdition[4]);
  colorLimEd6.setAttribute("src", singleDta.limitedEdition[5]);
  colorLimEd7.setAttribute("src", singleDta.limitedEdition[6]);
  colorLimEd8.setAttribute("src", singleDta.limitedEdition[7]);
}
renderDesData();



async function getCartData() {
  const res = await fetch("http://localhost:3000/cart");
  const data = await res.json();
  return data;
}

addToCartButton.addEventListener("click", async () => {
  const returnData = await getCartData();
  console.log(returnData);


  const checkCart=returnData.find((el)=>el.id==dataID)

  if(checkCart){
   alert("Item is Already In Cart")

  }else{
      fetch("http://localhost:3000/cart", {
        method:"POST",
        headers : {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({...currentDesData,quantity:1})
      })
    console.log(currentDesData);

  }

});
