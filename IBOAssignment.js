/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

//question 1 solution:
function getUniqueProductCount(products) {
  var obj = {};
  products.forEach((element) => {
    if (obj[element.productName] == undefined) {
      obj[element.productName] = 1;
    } else {
      obj[element.productName] += 1;
    }
  });
  return obj;
}
console.log(getUniqueProductCount(listOfProducts));

//question 2 solution:
function getUniqueProducts(products) {
  let unique = [{ ...products[0] }]; //initially adding first element in array
  for (let i = 1; i < products.length; i++) {
    var exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j].productName === products[i].productName) {
        unique[j].quantity += products[i].quantity;
        exists = true;
      }
    }
    if (!exists) {
      unique.push({ ...products[i] });
    }
  }
  return unique;
}
console.log(getUniqueProducts(listOfProducts));
