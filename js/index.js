/* Description: For the popup menu */ 

document.getElementById('drop').addEventListener('click', event => {
  document.getElementById('menu').classList.toggle('open');
});

/*  Description: Reference for the product label (sold out, limited stocks) and the image path */

const settings = {
  productsRemaining: 3, //Any product with a quantity less than 3 will flag a "Limited stocks!" call out
  imagePath: 'img/'
}

/* This is my array for all 20 products */

const allProducts = [
    { // 0
      id: 1,
      img: `blackshoes.jpg`,
      title: `King Black 1.0`,
      desc: `King Black 1.0 - the alpha and the omega.`,
      color: `black`,
      size: `6`,
      release: 2,
      discount: 50,
      quantity: 2,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 39

    },{  // 1
      id: 2,
      img: `blackshoes2.jpg`,
      title: `King Black 2.0`,
      desc: `Breezy shoes - hip and flashy.`,
      color: `black`,
      size: `7`,
      release: 1,
      discount: 60,
      quantity: 0,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 49
    },{  // 2
      id: 3,
      img: `blueshoes.jpg`,
      title: `King Blue 1.0`,
      desc: `The shoes for runners, get one now!`,
      color: `blue`,
      size: `8`,
      release: 2,
      discount: 70,
      quantity: 5,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 59
    },{  // 3
      id: 4,
      img: `blueshoes2.jpg`,
      title: `King Blue 2.0`,
      desc: `The future is here with King Blue 2.0.`,
      color: `blue`,
      size: `9`,
      release: 1,
      discount: 80,
      quantity: 2,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 69
    },{  // 4
      id: 5,
      img: `greenshoes.jpg`,
      title: `King Green 1.0`,
      desc: `Get your groove on with King Green 1.0.`,
      color: `green`,
      size: `10`,
      release: 2,
      discount: 90,
      quantity: 2,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 79
    },{  // 5
      id: 6,
      img: `greenshoes2.jpg`,
      title: `King Green 2.0`,
      desc: `Army gear with King Green 2.0 is here!`,
      color: `green`,
      size: `11`,
      release: 1,
      discount: 90,
      quantity: 9,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 79
    },{  // 6
      id: 7,
      img: `pinkshoes.jpg`,
      title: `King Pink 1.0`,
      desc: `King Pink 1.0 - sporty & casual.`,
      color: `pink`,
      size: `6`,
      release: 2,
      discount: 39,
      quantity: 7,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 29
    },{  // 7
      id: 8,
      img: `pinkshoes2.jpg`,
      title: `King Pink 2.0`,
      desc: `Walk or walkathon, King Pink 2.0 is key.`,
      color: `pink`,
      size: `7`,
      release: 1,
      discount: 80,
      quantity: 5,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 69
    },{  // 8
      id: 9,
      img: `redshoes.jpg`,
      title: `King Red 1.0`,
      desc: `King Retro 1.0 - your everyday school shoes.`,
      color: `red`,
      size: `8`,
      release: 4,
      discount: 70,
      quantity: 0,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 59
    },{  // 9
      id: 10,
      img: `redshoes2.jpg`,
      title: `King Red 2.0`,
      desc: `King Retro 2.0 - It's the chosen one!`,
      color: `red`,
      size: `9`,
      release: 3,
      discount: 40,
      quantity: 1,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 29
    },{  // 10
      id: 11,
      img: `redshoes3.jpg`,
      title: `King Red 3.0`,
      desc: `King Retro 3.0 - sporty and cool!`,
      color: `red`,
      size: `10`,
      release: 2,
      discount: 50,
      quantity: 0,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 39
    },{  // 11
      id: 12,
      img: `redshoes4.jpg`,
      title: `King Red 4.0`,
      desc: `King Retro 4.0 - vintage and elegant!`,
      color: `red`,
      size: `11`,
      release: 1,
      discount: 50,
      quantity: 4,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 39
    },{  // 12
      id: 13,
      img: `whiteshoes.jpg`,
      title: `King White 1.0`,
      desc: `Classic King White Air Force One.`,
      color: `white`,
      size: `6`,
      release: 2,
      discount: 60,
      quantity: 0,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 49
      },{  // 13
      id: 14,
      img: `whiteshoes2.jpg`,
      title: `King White 2.0`,
      desc: `Multi-colored King White 2.0 - set the mood.`,
      color: `white`,
      size: `1`,
      release: 5,
      discount: 60,
      quantity: 10,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 49
    },{  // 14
      id: 15,
      img: `whiteshoes3.jpg`,
      title: `King White 3.0`,
      desc: `Running shoes with air soles.`,
      color: `white`,
      size: `8`,
      release: 4,
      discount: 70,
      quantity: 6,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 59
    },{  // 15
      id: 16,
      img: `whiteshoes4.jpg`,
      title: `King White 4.0`,
      desc: `For your retro-rugged look - shoes with teeth!`,
      color: `white`,
      size: `9`,
      release: 3,
      discount: 80,
      quantity: 2,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 69
    },{  // 16
      id: 17,
      img: `whiteshoes5.jpg`,
      title: `King White 5.0`,
      desc: `It's like walking on fluffy clouds - King White 5.0`,
      color: `white`,
      size: `10`,
      release: 4,
      discount: 90,
      quantity: 2,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 79
    },{  // 17
      id: 18,
      img: `whiteshoes6.jpg`,
      title: `King White 6.0`,
      desc: `Sleek white water-resitant running shoes.`,
      color: `white`,
      size: `11`,
      release: 1,
      discount: 80,
      quantity: 3,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 70
    },{  // 18
      id: 19,
      img: `yellowshoes.jpg`,
      title: `King Yellow 1.0`,
      desc: `Retro yellow King Yellow Air Max!`,
      color: `yellow`,
      size: `6`,
      release: 2,
      discount: 70,
      quantity: 4,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 59
    },{  // 19
      id: 20,
      img: `yellowshoes2.jpg`,
      title: `King Yellow 2.0`,
      desc: `Yellow suede shoes.`,
      color: `yellow`,
      size: `7`,
      release: 1,
      discount: 80,
      quantity: 5,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 75
    }
];

/* 
Function: getProductsAsHtmlString
Return: String
Description: This generates my products list using the product allProducts array above
*/

const getProductsAsHtmlString = (product) => {

  let stockStatus = ``;
  let soldOutLabel = ``;
  let purchase = `<button type="button" class="purchaseme">Buy</button>`
  if (product.quantity <= 0) {
    stockStatus = `<small class="callout">Sold out</small>`;
    soldOutLabel = `soldout`;
    purchase = `<button type="button" class="cantpurchaseme">Out</button>`;
  } else if (product.quantity < settings.productsRemaining) {
    stockStatus = `<small class="callout limitedstock">Limited stocks!</small>`;
  }

  return `
  <div class="finalcut">
    <article class="product ${soldOutLabel}">
      <div>
        <header>
          <a href="#"><img src="${settings.imagePath + product.img}" alt="${product.title}" class="imgclass zoom"></a>
        </header>
        <h3 class="prodtitle">${product.title}</h3>
        <div class="prodinfo">
          <h4 class="quant">In stock: ${product.quantity} ${stockStatus}</h4>
        </div>
        <p class="proddesc">${product.desc}</p>
      </div>
      <div>
        ${purchase}
        <div class="bottomprodinfo">
          <form class="swatchcss">
              <fieldset class="swatch">
                <legend>Color Variants:</legend>
                  <ul class="swatches">
                    <li>
                      <label class="product-color red">
                        <input type="radio" name="colour" value="r" checked> 
                        <span>${product.swatch.colorway1}</span>
                      </label>
                    </li>
                    <li>
                      <label class="product-color white">
                        <input type="radio" name="colour" value="w">
                        <span>${product.swatch.colorway2}</span>
                      </label>
                    </li>
                    <li>
                      <label class="product-color blue">
                        <input type="radio" name="colour" value="b"> 
                        <span>${product.swatch.colorway3}</span>
                      </label>
                    </li>
                  </ul>
                <output id="selected"></output>
              </fieldset>
          </form>
          <form class="proddetails">
              <data value="39">CDN$<del class="discount">${product.discount}</del> <ins class="newprice"> ${product.price}</ins></data>
              <button type="button" id="addtocart"><span class="addtocart">Add to Cart</span></button>
          </form>
        </div>
    </div>
  </article>
</div>`;
}

const allP = allProducts.map(getProductsAsHtmlString).join(`\n`);

document.getElementById(`products`).innerHTML = allP;


/* 
Function: sortHighest
Return: Sorted array
Description: This sorts the allProducts array and returns the array sorted from highest priced to lowest
*/

let sort = document.getElementById(`sort`);

const sortHighest = () => {

  const sortByPrice = allProducts.sort(function (a, b) {
    return b.price - a.price;
  })  

  const sortAllP = sortByPrice.map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = sortAllP;

}

/* 
Function: sortLowest
Return: Sorted array
Description: This sorts the allProducts array and returns the array sorted from lowest priced to highest
*/

const sortLowest = () => {

  const sortByPrice = allProducts.sort(function (a, b) {
    return a.price - b.price;
  })  

  const sortAllP = sortByPrice.map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = sortAllP;

}

/* 
Function: sortNewest
Return: Sorted array
Description: This sorts the allProducts array and returns the array sorted from lowest "Release" number to highest
*/

const sortNewest = () => {

  const sortByPrice = allProducts.sort(function (a, b) {
    return a.release - b.release;
  })  

  const sortAllP = sortByPrice.map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = sortAllP;

}

/* 
Function: sortProducts
Return: Sorted array
Description: This function calls on the other sorting functions above
*/

const sortProducts = () => {

  let filterType = document.getElementById('sort').value;

  if (filterType == 'price-high') {

    sortHighest();

  } else if (filterType == 'price-low') {

    sortLowest();

  } else {
  
    sortNewest ();

}}

sort.addEventListener("input",sortProducts);


/* 
Function: colorCatFilter
Return: Filtered array
Description: This function filters the array by color
*/

let FilterC = document.getElementById(`shoecolor`);
let FilterS = document.getElementById(`shoecategory`);

const colorCatFilter = (c) => {

  let colorChoice = document.getElementById(`shoecolor`).value;
  let catChoice = document.getElementById(`shoecategory`).value;

  if (colorChoice == "None" && catChoice != "None") {

    return (c.category == catChoice);
  
  } else if (colorChoice != "None" && catChoice == "None") {

    return (c.color == colorChoice);

  } else if (colorChoice != "None" && catChoice != "None") {
    
    return c.color == colorChoice && c.category == catChoice;
  
  }

}

/* 
Function: prodAllFilter
Return: Filtered array
Description: This function filters the array by category (e.g. Running or Walking)
*/

const prodAllFilter= () => {

  const filterAllP = allProducts.filter(colorCatFilter).map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = filterAllP;
}

FilterC.addEventListener("input",prodAllFilter);
FilterS.addEventListener("input",prodAllFilter);

/* 
Function: showProductInHtml
Return: Filtered array when the user searches the product list by color
Description: Renders the searched values into an array and throws it into the HTML
*/

const showProductInHtml = (arr) => {

  document.getElementById('products').innerHTML = arr.map(getProductsAsHtmlString).join('\n');

}

/* 
Function: prodtitle
Return: Event listener when the user types something in the Search Field
Description: Renderst the filtered by search array into HTML (Second part of showProductInHtml above)
*/

const prodtitle = document.getElementById('find');

prodtitle.addEventListener('input', event => {

  const whatsInTheField = prodtitle.value;

  const searchedByName = allProducts.filter(p => p.title.toUpperCase().includes(whatsInTheField.toUpperCase()))
  showProductInHtml(searchedByName);

})

/* 
Function: plusCart
Return: Adds 1 to the Add to Cart in the upper-right hand portion of the screen
Description: Linked to the "Add to Cart" button on each product tile
*/

let buttonCart = document.getElementById(`addtocart`);

function plusCart () {

  let a = document.getElementById('cartnum').innerHTML;
  let b = parseInt(a);
  let c = b + 1;

  return document.getElementById('cartnum').innerHTML = c;
}

buttonCart.addEventListener("click",plusCart);

/* 
Function: dropDownList
Return: API result of www.weatherstack.com search value
Description: I added a weather api that we learned from Kadeem's class. I linked it's value by stating that the user can decide which type of shoes to wear for the day depending on the weather of the place he's going to.
*/

let dropDownList = document.getElementById(`city`);

dropDownList.addEventListener("change",function(){
    
  const endPoint
  =`http://api.weatherstack.com/current?access_key=f1bc0584c797f6554950b903feafad69&query=${dropDownList.value}`;

  fetch(endPoint)
  .then(function(res){
      res.json()
      .then(function(data){
        let div = document.getElementById("container");
        div.innerHTML=`The temperature in ${dropDownList.value} is ${data.current.temperature}°C (${data.current.weather_descriptions} as of ${data.location.localtime})`
      })
  })
})


/* Description: For the popup help menu */ 


document.getElementById('dropittwo').addEventListener('click', event => {
  document.getElementById('helpmenu').classList.toggle('open');
});

