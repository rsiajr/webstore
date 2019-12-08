/* Menu dropdown function */

document.getElementById('drop').addEventListener('click', event => {
  document.getElementById('menu').classList.toggle('open');
});

/*-------------------------------------------------------------------------------*/

/* Settings */

const settings = {
  productsRemaining: 3,
  imagePath: 'img/'
}

/* Array of products */


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
      desc: `Breezy shoes for that hip and flashy vibe.`,
      color: `black`,
      size: `7`,
      release: 1,
      discount: 360,
      quantity: 0,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 249
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
      category: 'running',
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
      desc: `It's time to get your groove on with King Green 1.0.`,
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
      desc: `Get that army gear on, King Green 2.0 is here!`,
      color: `green`,
      size: `11`,
      release: 1,
      discount: 300,
      quantity: 9,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 189
    },{  // 6
      id: 7,
      img: `pinkshoes.jpg`,
      title: `King Pink 1.0`,
      desc: `King Pink 1.0 - sporty and casual rolled into one.`,
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
      desc: `Walk or walkathon, King Pink 2.0 will give you what you need.`,
      color: `pink`,
      size: `7`,
      release: 1,
      discount: 310,
      quantity: 5,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 199
    },{  // 8
      id: 9,
      img: `redshoes.jpg`,
      title: `King Red 1.0`,
      desc: `King Retro 1.0 - your everyday school shoes.`,
      color: `red`,
      size: `8`,
      release: 4,
      discount: 110,
      quantity: 0,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 99
    },{  // 9
      id: 10,
      img: `redshoes2.jpg`,
      title: `King Red 2.0`,
      desc: `King Retro 2.0 - for the kid in you.`,
      color: `red`,
      size: `9`,
      release: 3,
      discount: 40,
      quantity: 1,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 29
    },{  // 10
      id: 11,
      img: `redshoes3.jpg`,
      title: `King Red 3.0`,
      desc: `King Retro 3.0 - sporty and cool.`,
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
      desc: `King Retro 4.0 - vintage and elegant.`,
      color: `red`,
      size: `11`,
      release: 1,
      discount: 50,
      quantity: 4,
      category: 'walking',
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
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 49
    },{  // 14
      id: 15,
      img: `whiteshoes3.jpg`,
      title: `King White 3.0`,
      desc: `Running shoes with air soles - perfect for short and long runs.`,
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
      desc: `It's like walking on the clouds - King White 5.0`,
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
      desc: `Sleek white water-resitant running shoes perfect for the outdoorsy people.`,
      color: `white`,
      size: `11`,
      release: 1,
      discount: 100,
      quantity: 3,
      category: 'running',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 89
    },{  // 18
      id: 19,
      img: `yellowshoes.jpg`,
      title: `King Yellow 1.0`,
      desc: `Retro yellow King Yellow Air Max: Live for the thrill!`,
      color: `yellow`,
      size: `6`,
      release: 2,
      discount: 110,
      quantity: 4,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 99
    },{  // 19
      id: 20,
      img: `yellowshoes2.jpg`,
      title: `King Yellow 2.0`,
      desc: `Yellow suede shoes perfect for social gatherings and every day use.`,
      color: `yellow`,
      size: `7`,
      release: 1,
      discount: 110,
      quantity: 5,
      category: 'walking',
      swatch: { colorway1: `Red`, colorway2: `White`, colorway3: `Blue` },
      price: 99
    }
];

/*-------------------------------------------------------------------------------*/

/* Array to HTML */

const getProductsAsHtmlString = (product) => {

  let stockStatus = ``;
  let soldOutLabel = ``;
  let purchase = `<button type="button" class="purchaseme">Buy</button>`
  if (product.quantity <= 0) {
    stockStatus = `<small class="callout">Sold out</small>`;
    soldOutLabel = `soldout`;
    purchase = ``;
  } else if (product.quantity < settings.productsRemaining) {
    stockStatus = `<small class="callout limitedstock">Limited stocks!</small>`;
  }

  return `
    <article class="product ${soldOutLabel}">
      <header>
        <a href="#"><img src="${settings.imagePath + product.img}" alt="${product.title}" class="imgclass"></a>
      </header>
      <h3 class="prodtitle">${product.title} ${stockStatus}</h3>
      <h4 class="quant">In stock: ${product.quantity}</h4>
      <p class="proddesc">${product.desc}</p>
      <form>
          ${purchase}
          <fieldset class="swatch">
              <legend>Select a colour</legend>
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
          <data value="39"><del class="discount">$${product.discount}</del> <ins class="newprice">$${product.price}</ins></data>
          <button type="button"><span class="material-icons">add_shopping_cart</span> <span class="addtocart">Add to Cart</span></button>
          <button type="button"><span class="material-icons">favorite</span></button>
      </form>
    </article>`;
}

const allP = allProducts.map(getProductsAsHtmlString).join(`\n`);

document.getElementById(`products`).innerHTML = allP;

/*-------------------------------------------------------------------------------*/

/* Sort products */

let sort = document.getElementById(`sort`);

const sortHighest = () => {

  const sortByPrice = allProducts.sort(function (a, b) {
    return b.price - a.price;
  })  

  const sortAllP = sortByPrice.map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = sortAllP;

}

const sortLowest = () => {

  const sortByPrice = allProducts.sort(function (a, b) {
    return a.price - b.price;
  })  

  const sortAllP = sortByPrice.map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = sortAllP;

}

const sortNewest = () => {

  const sortByPrice = allProducts.sort(function (a, b) {
    return a.release - b.release;
  })  

  const sortAllP = sortByPrice.map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = sortAllP;

}

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

/*-------------------------------------------------------------------------------*/

/*Filter function*/

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

const prodAllFilter= () => {

  const filterAllP = allProducts.filter(colorCatFilter).map(getProductsAsHtmlString).join(`\n`);

  document.getElementById(`products`).innerHTML = filterAllP;
}

FilterC.addEventListener("input",prodAllFilter);
FilterS.addEventListener("input",prodAllFilter);

/*-------------------------------------------------------------------------------*/

/* Search function */

const showProductInHtml = (arr) => {

  document.getElementById('products').innerHTML = arr.map(getProductsAsHtmlString).join('\n');

}

const prodtitle = document.getElementById('find');

prodtitle.addEventListener('input', event => {

  const whatsInTheField = prodtitle.value;

  const searchedByName = allProducts.filter(p => p.title.toUpperCase().includes(whatsInTheField.toUpperCase()))
  showProductInHtml(searchedByName);

})

/*-------------------------------------------------------------------------------*/