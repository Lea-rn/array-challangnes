"use strict";

////// slice :::
////// tekhidh copie : d'ont change the original array ..

// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr);
// console.log(arr.slice(1, 4));
// console.log(arr);

/////// splice ::
///// tfasakh partie : change the original array ..
// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);

////// spread operators ::

// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr);
// console.log(...arr);

// const x = [
//   { name: "jhon", country: "germany" },
//   { name: "paul", country: "england" },
// ];

// console.log(x);
// console.log(...x);

///// reverse :: (change the original array ..)
// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr);
// arr.reverse();
// console.log(arr);

//// concat ::
// let arr = ["a", "b", "c", "d", "e", "f"];
// let x = ["j", "h", "i", "k", "l"];
// console.log(arr);
// console.log(x);
// let z = x.concat(arr);
// console.log(z);

///// at ::
// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr[2]);
// console.log(arr.at(2));

////// for :::
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

//// automatic for ::
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const element of numbers) {
//   console.log(element);
// }

//// exemple ::

// const movements = [200, 450, -400, 1000, -800, 100];

// for (const mov of movements) {
//   if (mov > 0) {
//     console.log(`you deposit ${mov} dinar`);
//   } else {
//     console.log(`you withdraw ${Math.abs(mov)} dinar`);
//   }
// }

////// forEach ::  higher order functions

// const names = ["peter", "jhon", "mark"];

// names.forEach(function (ele, i) {
//   console.log(`index : ${i} , elements : ${ele}`);
// });

// const movements = [200, 450, -400, 1000, -800, 100];

// movements.forEach(function (mov, i) {
//   if (mov > 0) {
//     console.log(`movement ${i} : you deposit ${mov} dinar`);
//   } else {
//     console.log(`movement ${i} : you withdraw ${mov} dinar`);
//   }
// });

///// sort ::

// let numbers = [10, 2, 5, 100, 6, 9, 30];

// console.log(numbers);

// const result = numbers.sort(function (z, k) {
//   return z - k;
// });

// console.log(result);

// ////// challanges ::
// ////////////////////////////////////////////////// problem solving ///////////////////////////////////

// // Easy Problems::////////////////////////////////////////////
// // Append an Element:
// // const arr = [1,2,3,4,5]
// // Given an array of numbers, add a new number to the end of the array .
// ////////////////////

// ////// put your answer here ...........
// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);
// // Remove the Last Element:
// // Remove the last element from an array .

// ////// put your answer here ...........

// arr.pop();
// console.log(arr);

// //////////////

// // Insert at the Beginning:
// // Add an element at the start of an array .
// ////////////////////
// // const arr = [1,2,3,4,5]

// ////// put your answer here ...........
// const arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// console.log(arr);

// // Remove the First Element:
// // Remove the first element from an array .
// /////////////////
// //
// ////// put your answer here ...........
// arr.shift();
// console.log(arr);

// // Check if Element Exists:
// // Write a function that checks if a given element exists .
// // const arr = [1,2,3,4,5]
// const numbers = [1, 2, 3, 4, 5];
// function check(num, arr) {
//   if (arr.includes(num)) {
//     console.log(`we have this number : ${num}`);
//   } else {
//     console.log("we dont have this number");
//   }
// }

// check(55, numbers);

// // Combine two arrays into one .

// ///////////////////

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// // // ////// put your answer here ...........

// console.log(arr1);
// console.log(arr2);
// const arr3 = arr2.concat(arr1);
// console.log(arr3);

// // Reverse an Array:
// // Reverse the elements in an array .
// const z = [6,7,8,9,10]

// ////// put your answer here ...........
// const z = [6, 7, 8, 9, 10];
// console.log(z);
// console.log(z.reverse());

// //////////////////

// // Slice a Subarray:
// // Extract a subarray from a given array. Return elements between index 2 and 5.
// const h = [6, 7, 8, 9, 10, 20, 30, 50, 60];

// ////// put your answer here ..........
// ////////////////////
// console.log(h);
// console.log(h.slice(2, 6));
// console.log(h);

// // Splice :
// //  remove 3 elements from an array starting from index 2.
// const u = [6, 7, 8, 9, 10, 20, 30, 50, 60];

// ////// put your answer here ...........
// ///////////////////////////
// console.log(u);
// console.log(u.splice(2, 3));
// console.log(u);

// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.

////// put your answer here ...........
///////////////////////
// const num = [2, 5, 6, 8]; //// 21

// const sumNumOfArray = function (arr) {
//   let sum = 0;
//   arr.forEach(function (ele) {
//     sum = sum + ele
//   });
//   return sum;
// };

// const sumNumOfArray = function (arr) {
//   let sum = 0;
//   arr.forEach((ele) => (sum += ele));
//   return sum;
// };

// console.log(sumNumOfArray(num));

// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
////// put your answer here ...........

// const index = 2;
// const num = [2, 5, 6, 8];

// console.log(num);
// num.splice(index, 1);
// console.log(num);

///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
////// put your answer here ...........
/////////////////////

// const names = ["jhon", "peter", "mark"];
// console.log(names);

// names.splice(1, 2, "nicole", "steven");
// console.log(names);
////////////////////

// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////// put your answer here ...........
////////////////////

// const arr1 = [10, 8, 9, 7, 5];
// const arr2 = [6, 4, 4, 3, 11];
// console.log(arr1);
// console.log(arr2);
// const arr3 = arr1.concat(arr2).sort( (a, b)=> a-b );
// console.log(arr3);
// console.log(arr3);
// arr3.sort((a, b) => a - b);
// console.log(arr3);

// Find Maximum Number:
// Use forEach to find the largest number in an array.
////// put your answer here ...........
// const arr2 = [6, 4, 111, 3, 11];
// function max(arr) {
//   let maxNumber = arr[0]; ////
//   arr.forEach((num) => {
//     if (num > maxNumber) {
//       maxNumber = num;

//     }
//   });
//    return maxNumber

// }
// console.log(arr2);
// console.log(max(arr2));

//// second method ::
const arr2 = [6, 4, 111, 3, 11];
const arr3 = arr2.sort((a, b) => a - b)[arr2.length - 1];
// const result = arr3[arr3.length - 1];
console.log(arr3);

////////////////
// const arr2 = [0, 8, 6, 10, 7, 11, 13];

// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.

////// put your answer here ...........

// const numbers = [1, 10, 2, 10, 5, 6, 10, 100, 6];

// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////// put your answer here ...........

////////////////////

// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////

// const arrFlatten = [[1,2,3] , [10,20,30] , [50,60,100]] ; ///// [1,2,3,10,20,30,50,60,100] ;

// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
////// put your answer here ...........

//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
////// put your answer here ...........

// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method. /
////// put your answer here ...........
