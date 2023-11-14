/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

const hobbies = ["running", "reading", "painting", "board games"];
console.log("List of Hobbies:");
for (let i = 0; i < hobbies.length; i++) {
  console.log(`${i + 1}. ${hobbies[i]}`);
}
console.log(`Total hobbies: ${hobbies.length}`);

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

const colors = ["green", "red", "teal", "orange", "teal"];
console.log("colors:", colors);
// Create a variable tealCount
let tealCount = 0;

// Write a loop that counts the number of times "teal" is in the array

console.log("Colors:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
  if (colors[i] === "teal") {
    tealCount++;
  }
}
console.log(`Teal was found ${tealCount} times`);
/**
 *
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

const numbers = [3, 7, 2, 8, 11, 4, 2];
let oddNumbers = [];
let evenNumbers = [];

console.log("Numbers:", numbers);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:".oddNumbers);

/**
 *
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */ 
let booleanArray = [true, false, true, false, false];
let toggled = [];
booleanArray.forEach((value) => {
  toggled.push(!value);
  console.log("toggled value", value, !value);
});

// Example output
// true, false, true, true
// Toggled false, true, false, false

/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */

// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
