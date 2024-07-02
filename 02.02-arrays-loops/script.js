// Console styles
//const styles = 'padding: 10px; background-color: white; color: blue'; 

/* 
======
ARRAYS
====== 
*/ 

let coffeeOrder = [
  "Alex - Cortado",
  "Ben - Cortado",
  "Charlie - Whatever is new"
]

// console.log("--------------------------------------");
// console.log("Array coffeeOrder is of data type >>> ", typeof coffeeOrder);
// console.log("--------------------------------------");
// console.log("*** Original array ***");
// console.log("-------------------------------------");
// console.log(`let coffeeOrder = [
//   "Alex - Cortado",
//   "Ben - Cortado",
//   "Charlie - Whatever's new"
// ]`);
// console.log(" ");
// console.log("1/ RETURN the SECOND element in the array:");
// console.log("------------------------------------------");
// console.log(`coffeeOrder[1] ~> 'Hey, give me the second element in coffeeOrder'`);
// console.log(`The SECOND element in the array >>> ${coffeeOrder[1]} <<<`);
// console.log("------------------------------------------");
// console.log(" ");
// console.log("2/ CHANGE the SECOND element in the array:");
// console.log("------------------------------------------");
// console.log(`coffeeOrder[1] = "Ann - Vanilla Latte"`);
// coffeeOrder[1] = "Ann - Vanilla Latte"
// console.log(`MUTATED ARRAY >>> [${coffeeOrder}] <<<`);
// console.log("------------------------------------------");

// console.log(" ");
// console.log("Our coffee order is of length: ", coffeeOrder.length);
// coffeeOrder.push("Donna - espresso")
// console.log(coffeeOrder);
// console.log("Our coffee order is of length: ", coffeeOrder.length);
// console.log("");
// coffeeOrder.pop();
// console.log(coffeeOrder);

// Array methods
// console.log("-------------------------------------");
// console.log("*** Array map() method example ***");
// console.log("-------------------------------------");
// console.log("*** Input ***");
// console.log(`const array1 = [1, 4, 9, 16];`);
// const array1 = [1, 4, 9, 16];
// // Pass a function to map
// console.log("*** Pass a function to map() ***");
// console.log(`const map1 = array1.map((x) => x * 2);`);
// const map1 = array1.map((x) => x * 2);
// console.log("*** Output ***");
// console.log(map1); // Expected output: Array [2, 8, 18, 32]

// console.log("-------------------------------------");
// console.log("*** Array shift() method example ***");
// console.log("-------------------------------------");
// console.log("*** Input ***");
// const arr1 = [1, 2, 3]; 
// const firstElement = arr1.shift(); 
// console.log(arr1); // Expected output: Array [2, 3] 
// console.log(firstElement); // Expected output: 1

// console.log("-------------------------------------");
// console.log("*** Array splice() method example ***");
// console.log("-------------------------------------");
// console.log("*** Input ***");
// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months);
// // Expected output: Array ["Jan", "March", "April", "June"]

// months.splice(1, 0, 'Feb');
// console.log("*** Output after first splice() ***");
// console.log(months); // Inserts at index 1
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May'); // Replaces 1 element at index 4
// console.log("*** Output after second splice() ***");
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// /* 
// =====
// LOOPS
// ===== 
// */ 

// const favDrinks = ["water", "tea", "coffee", "kombucha"];
// for (let i = 0; i < favDrinks.length; i++) {
//   console.log(`${i} -`, favDrinks[i]);
// }

// let multTwo = [];
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0 && i !== 0) {
//     multTwo.push(i);
//   }
// }

// console.log(`Numbers between zero and twenty wholly divisible by two are ${multTwo}`);

// while (true) {
//   console.log("Oh no! We are stuck in an infinite loop :(");
// }

// let age = 13;
// while (age < 18) {
//   console.log(`You are a child, aged ${age}`);
//   age++
// }

// console.log("But now you are an adult!");

// let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
// let currentSuit = "Clubs";
// let count = 0;
// while (currentSuit != "Spades") {
//   console.log(`Loop number: ${count+=1}`);
//   console.log(currentSuit);
//   currentSuit = suits[Math.floor(Math.random()*4)]
// }

// console.log(currentSuit);

let favFilms = ["Alien", "Aliens", "Alien vs Predator", "Liar, Liar!"]
console.log(favFilms);
favFilms.push("E.T.")
console.log(favFilms);
