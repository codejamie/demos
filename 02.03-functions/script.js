/* FUNCTIONS */

//// ACTIVITY 1 - CINEMA TICKET PRICES
console.log('// -> ACTIVITY 1 - CINEMA TICKET PRICES');

let price;
console.log('Price will be undefined at this point:', price) // Undefined
let age = 10;

if (age < 18) {
  price = 8.00
  console.log("Ticket price is £8");
} else if (age >= 60) {
  price = 7.50
  console.log("Ticket price is £7.50");
} else {
  price = 10.95
  console.log("Ticket price is £10.95");
}

//// ACTIVITY 2 - LOGGING COLOURS
console.log('// -> ACTIVITY 2 - LOGGING COLOURS');

//// Pre 2015/ES6 style function declaration
// function favColour() {
//   console.log("My favourite colour is blue.");
// }
// favColour();

//// ACTIVITY 3 - COFFEE GRINDER ON/OFF SWITCH
console.log('// -> ACTIVITY 3 - COFFEE GRINDER ON/OFF SWITCH');

// let coffeeIsGrinding = false;
// // ES6 style function declaration
// const pressGrindBeans = () => {
//   if (coffeeIsGrinding) {
//     console.log("Stopping the grind");
//     coffeeIsGrinding = false;
//   } else {
//     console.log("Starting the grind");
//     coffeeIsGrinding = true;
//   }
// }
//pressGrindBeans(); // This will always be false 

// ACTIVITY 4 - FAVCOLOUR. Function has one parameter.
console.log('// -> ACTIVITY 4 - FAVCOLOUR');

// const favColour = (colour) => {
//   console.log(`My favourite colour is ${colour}`);
// }
// Call the function with an argument
// favColour("Green")

// ACTIVITY 5 - REFACTOR FUNCTION TO ES6 STYLE
console.log('// -> ACTIVITY 5 - FACTORIAL REFACTOR');

// Original function
// function factorial(n) {
//   if ((n === 0 ) || (n === 1)) {
//     return 1;
//   } else {
//     return (n * factorial(n - 1));
//   }
// }

// Refactored ES6 style function
// const factorial = (n) => {
//   if ((n === 0 ) || (n === 1)) {
//     return 1;
//   } else {
//     return (n * factorial(n - 1));
//   }
// }
// console.log(factorial(5));

// ACTIVITY 6 - PIZZA PARAMETERS
console.log('// -> ACTIVITY 6 - PIZZA PARAMETERS');

// Original function
// let orderCount = 0;
// const takeOrder = (topping) => {
//   console.log(`Pizza with ${topping}`);
//   orderCount++;
// }
// takeOrder("meatballs");

// Refactored function
// let orderCount = 0;
// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} and ${topping2}`);
//   orderCount++;
//   console.log(`Order count is now ${orderCount}`);
// }
// takeOrder("meatballs", "onion");

// ACTIVITY 7 - CASH MACHINE
console.log('// -> ACTIVITY 6 - CASH MACHINE');

// Dispense cash if pin correct and balance is equal 
// to or more than the withdrawal amount

// const atm = (pin,amount) => {
//   console.log(`// -> PIN is ${pin}, amount requested is ${amount}`);
  
//   let balance;
//   checkDetails(pin)
  
//   function checkDetails(pin) {
//     if (pin === 1234) {
//       balance = 1000; 
//     }
//     return balance;
//   }
//   console.log(`// -> Customer balance is ${balance}`);

//   if ((pin === 1234) && (amount <= balance)) {
//     return `Please wait for your cash to be dispensed. New balance is: ${balance - amount}`
//   } else if ((pin === 1234) && (amount > balance)) {
//     return `Insufficient funds, please enter a lower amount.`
//   } else {
//     return `Incorrect PIN.`
//   }
// }

// console.log(atm(1234,150));