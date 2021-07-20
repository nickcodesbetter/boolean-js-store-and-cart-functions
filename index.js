const store = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450
      },
      price: 600
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20
      },
      price: 1000
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0
      },
      price: 1400
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100
      },
      price: 600
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300
      },
      price: 600
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80
      },
      price: 2400
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200
      },
      price: 1800
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15
      },
      price: 2300
    }
  ]
};

// Each section needs it's own for loop
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// STORE EXERCISES

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

function filterExpensiveProducts(products) {
  const over1000 = [];
  for (i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;

    if (price >= 1000) {
      over1000.push(product);
    }
  }
  return over1000;
}

// console.log("over1000: ", over1000);

// Example of what it should look like:
const over1000 = filterExpensiveProducts(store.products);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000

function allProductsUnder1000(products) {
  const under1000 = [];
  for (i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;
    if (price < 1000) {
      under1000.push(product);
    }
  }
  return under1000;
}

const under1000 = allProductsUnder1000(store.products);

// console.log("Products under £1000: ", under1000);


// const cheapProducts = function();

// console.log("cheapProducts: ", cheapProducts);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have an incoming delivery
// function productsThatNeedToBeReceived(products) {
//   const incomingProducts = [];
//   for (i = 0; i < products.length; i++) {
//     const product = products[i];
//     const incomingProducts = product.stock.incomingDelivery;
//     if (incomingDelivery === true) {
//       incomingProducts.push(product);
//     }
//   }
//   return incomingProducts;
// }
// const incomingProducts = productsThatNeedToBeReceived(store.products);

// console.log("Incoming Products: ", incomingProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock
// function outOfStockProducts(products) {
//   const noneLeft = [];
//   for (i = 0; i < products.length; i++) {
//     const product = products[i];
//     const noneLeft = product.quantity;
//     if (quantity === 0) {
//       noneLeft.push(product);
//     }
//   }
//   return noneLeft;
// }
// const noneLeft = outOfStockProducts(store.products);

// console.log("These products are out of stock: ", noneLeft);


// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

// function productsThatNeedToBeOrdered(products) {
//   const orderSoon = [];
//   for (i = 0; i < products.length; i++) {
//     const product = products[i];
//     const orderSoon = product.quantity;
//     if (quantity <= 100 && incomingDelivery === false)   {
//       orderSoon.push(product);
//     }
//   }
//   return orderSoon;
// }
// const orderSoon = productsThatNeedToBeOrdered(store.products);

// console.log("These products are out of stock soon: ", orderSoon);







// Step by Step process







// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

function findTablets(appleProducts) {
    // console.log("Inside findTablets: ", appleProducts);



  }

const tablets = findTablets(store.products);

// console.log("Tablets:", tablets)
// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

// const computers = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"

// const iMac = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

// const iPhone12 = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

// const iPadMini = function();

// ----- CHALLENGE -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

// const productTypes = function();

// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400
    },
    quantity: 4
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600
    },
    quantity: 2
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800
    },
    quantity: 2
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300
    },
    quantity: 2
  }
];

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total price of the items in the cart


// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart

function cartQuantityCalculator(cart) {
  // console.log("Inside cartQuantityCalculator: ", cart)
  
    let totalQuantity = 0
  
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      const quantity = item.quantity;
  
      // console.log("Iteration #", i + 1)
      // console.log("Total at the start of iteration:", totalQuantity)
      // console.log("Quantity: ", quantity)
      totalQuantity = totalQuantity + quantity
  }
  
  return totalQuantity
  
  }
  
  const totalQuantity = cartQuantityCalculator(cart)
  
  // console.log("totalQuantity: ", totalQuantity);

// const quantityOfItemsInCart = function()

// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"






// Did not work with loop - spent a fair bit on this


// function informationFinder(cart) {
//   console.log("Inside informationFinder: ", cart)
  
//     let itemInfo = null
  
//     for (let i = 0; i < cart.length; i++) {
//       const item = cart[i];
//       const product = item.product;
//       const quantity = item.quantity;
  
//       console.log("Iteration #", i + 1)
//       console.log("Product info ", product)
//       console.log("Quantity info: ", quantity)
//       itemInfo = product + quantity
      
//       const = `${name} | ${type - price * quantity} | ${total}\n`;

//     }
  
//   return itemInfo
  
//   }
  
//   const itemInfo = informationFinder(cart)
  
//   console.log("itemInfo: ", itemInfo);


// Did not work with loop





function informationFinder(item) {
  console.log("Inside informationFinder: ", item)
    
  const name = item.product.name;
  const type = item.product.type;
  const price = item.product.price;
  const quantity = item.quantity;
  const total = price * quantity;

  // console.log(total);

  return `${name} | ${type} - ${price} x ${quantity} || ${total} \n`;
}

// const recieptRow = informationFinder(cart[2]);
// console.log(recieptRow);
  
  


// const recieptRow = function()

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the variosu rows on the reciept
// TIP: Re-use the above function for "receiptRow"

function multipleRows(cart){
console.log("Multiple rows: ", cart)

for (let i = 0; i < multipleRows.informationFinder; i++) {
  //       const item = cart[i];
  //       const product = item.product;
  //       const quantity = item.quantity;
  
}

}

function informationFinder(item) {

  console.log("Inside informationFinder: ", item)

  const name = item.product.name;
  const type = item.product.type;
  const price = item.product.price;
  const quantity = item.quantity;
  const total = price * quantity;

  // console.log(total);

  return `${name} | ${type} - ${price} x ${quantity} || ${total} \n`;
}

const recieptRow = informationFinder(cart[1]);
console.log(recieptRow);
// const receiptMessage = function()

// console.log("receiptMessage: ", receiptMessage)
