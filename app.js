const array1 = ["vanilla", "chocolate", "strawberry"];

const array2 = array1.map((currentElement) => {
  return currentElement + " ice cream";
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.
// Your code here

const newArray = nums.map(function (num) {
  return num * 2;
});

console.log(newArray);
console.log("-------------------------------");

/*
//Array destructuring
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'
*/

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
// console.log(firstTopping)
// console.log(secondTopping)

console.log(pizzaToppings[0]);
console.log(pizzaToppings[1]);
console.log("-------------------------------");

/*
// // Object destructuring:
const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'

console.log('-------------------------------')
*/

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
};

const { make, model } = car;

console.log(make);
console.log(model);
console.log("-------------------------------");

//ex4

const fruits = ["apple", "orange", "banana"];
const vegetables = ["broccoli", "carrot", "spinach"];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
//ex5
// Your code here
const DuplicateArray = [...pizzaToppings];
const referenceArray = pizzaToppings;

const controversialPizzaToppings = [...pizzaToppings];

//q5
const myCar = { ...car, model: "q7" };

console.log("Exercise 5 - Original car:", car);
console.log("Exercise 5 - My car:", myCar);
console.log("----------------------------------");

const propertyName = "username";

const userProfile = {
  [propertyName]: "Mr_Denis",
};

console.log(userProfile);

// Q8

function describeAnimal(animal = "cat", adjective = "white") {
  console.log(`The ${animal} is ${adjective}.`);
}

describeAnimal();
describeAnimal("dog", "brown");
describeAnimal("parrot");
describeAnimal(undefined, "black");

// q9

let pizza = "tasty";
console.log(pizza === "tasty" ? "yum" : "yuck");
//right to left
const result1 = "bar" && "foo";
//false && anything = false
const result2 = false || 243;
//true
const result3 = 42 && false;
let myVar;
const result4 = myVar || 3000;

console.log("result1:", result1);
console.log("result2:", result2);
console.log("result3:", result3);
console.log("result4:", result4);
console.log("------------------------------");

//q10

const localLangConfig = null;
const LANG = localLangConfig || "en";
console.log("Language setting:", LANG);

const userSavedTheme = null;
const USER_THEME = userSavedTheme || "light";
console.log("User theme setting:", USER_THEME);

const adventurer = {
  name: "Denis",
};

let dog = adventurer.dog?.name;
console.log(dog);
console.log("------------------------------");

// q11
const theAdventurer = {
  name: "Denis the Adventurer",
};

let cat = adventurer.cat?.age;

console.log(cat); // it wil be undfined
