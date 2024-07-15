// Global Scope Example
// let age = 21;
// console.log("");
// console.log("*** GLOBAL Scope ***");
// console.log("");

// console.log(">>> age is available globally <<<");
// console.log(`My age is ${age}`); // -> 21
// console.log("");
// const callAge = () => {
//   console.log(`My age is ${age}`); // -> 21
// }

// console.log(">>> age is also available inside the function <<<");
// callAge()
// console.log("");

// FUNCTION Scope Example
// let age = 21;
// console.log("");
// console.log("*** FUNCTION Scope ***");
// console.log("");

// console.log(">>> age is set in global scope, firstName is in function scope <<<");
// console.log("");
// const callAge = () => {
//   let firstName = "Karen"
//   console.log(`Hi, I'm ${firstName} and I am ${age} years old`); // -> 21
// }

// callAge()
// console.log("");
// console.log(">>> We cannot access firstName outside of the function <<<");
// console.log(firstName); // -> ReferenceError: firstName is not defined

// BLOCK Scope Example

// const startLet = () => {
//   for (let i = 0; i < 5; i++) {
//     console.log(i); // -> 0,1,2,3,4
//   }
//   // console.log(i); // -> ReferenceError: i is not defined
// }

// const startVar = () => {
//   for (var i = 0; i < 5; i++) {
//     console.log(i); // -> 0,1,2,3,4​
//   }
//   console.log(i); // -> 5​
// }

// console.log('Running with let:');
// startLet();
// console.log('Running with var:');
// startVar();

// BLOCK Scope Example 2 - If/Else

// const startLet = () => {
//   for (let i = 0; i < 5; i++) {
//     if (true) {
//       let colour = "red";
//       console.log(i, colour); // -> 0 red, 1 red, 2 red, 3 red, 4 red
//     }
//     console.log(i, colour); // -> ReferenceError: i is not defined
//   }
//   // console.log(i); // -> ReferenceError: i is not defined
// }
// startLet();

// const startVar = () => {
//   for (var i = 0; i < 5; i++) {
//     if (true) {
//       var colour = "red";
//       console.log("INSIDE of the if block");
//       console.log(i, colour); // -> 0 red, 1 red, 2 red, 3 red, 4 red
//     }
//     console.log("OUTSIDE of the if block");
//     console.log(i, colour); // -> -> 0 red, 1 red, 2 red, 3 red, 4 red
//   }
//   // console.log(i); // -> ReferenceError: i is not defined
// }
// startVar();

// Scope Chain
// console.log("");
// console.log("Scope Chain");
// console.log("-----------");

// let globalVar = 'globalVar';
// console.log(`Global Scope: ${globalVar}`);

// const outerFun = () => {
//   let outerVar = 'outerVar';
//   console.log(`Outer function: ${outerVar}`);
//   // console.log(`Outer function: ${innerVar}`); // ReferenceError: innerVar not defined

//   const innerFun = () => {
//     let innerVar = 'innerVar';
//     console.log(`Inner function: ${globalVar}`);
//     console.log(`Inner function: ${outerVar}`);
//     console.log(`Inner function: ${innerVar}`);
//   }
//   innerFun();
// }
// outerFun();
// //innerFun(); // -> ReferenceError innerFun not defined

// console.log("");
// console.log("Activity 1 - Higher Order Functions");
// console.log("-----------------------------------");

// const cn = () => {
//   console.log("We are Code Nation");
// }

// const runXtime = () => {
//   for (let i = 0; i < 5; i++) {
//     cn()
//   }
// }
// runXtime(5);

// console.log("");
// console.log("Activity 2 - map()");
// console.log("------------------");
// const arr = [1,2,3,4,5];
// const mappedArr = arr.map((x) => x * 3);
// console.log(arr, "<<< Original array, arr");
// console.log(mappedArr, "<<< Mapped array: each element * 3");