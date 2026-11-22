// ----- Sort practice -----
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// Default sort. "Bananas" comes first because capital letters sort before lowercase.
simpleList.sort();
console.log(simpleList);

function compareFn(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

simpleList.sort(compareFn);
console.log(simpleList);

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

// Sort products by price, lowest first
function compareProducts(a, b) {
  return a.price - b.price;
}

products.sort(compareProducts);
console.log(products);

// ----- Filter practice -----
// Fruits that have the letter "a" in them
const withA = simpleList.filter(function (item) {
  return item.includes("a");
});
console.log(withA);

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

// Animals that have the trait "cuddly"
const cuddlyAnimals = animals.filter(function (animal) {
  return animal.traits.includes("cuddly");
});
console.log(cuddlyAnimals);