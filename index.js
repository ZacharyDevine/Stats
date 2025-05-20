/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
  let sum = 0;
  for(let count = 0; count < numbers.length; count++){
    sum = sum + numbers[count];
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  let sum = 0;
  for(let count = 0; count < numbers.length; count++){
    sum = sum + numbers[count];
  }
  return sum/numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
  let smallestIndex = 0;
  for(let count = 0; count < numbers.length; count++){
    if(numbers[count] < numbers[smallestIndex]){
      smallestIndex = count;
    }
  }
  return numbers[smallestIndex];
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  let largestIndex = 0;
  for(let count = 0; count < numbers.length; count++){
    if(numbers[count] > numbers[largestIndex]){
      largestestIndex = count;
    }
  }
  return numbers[largestIndex];
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
  let smallestIndex = 0;
  for(let count = 0; count < numbers.length; count++){
    if(numbers[count] < numbers[smallestIndex]){
      smallestIndex = count;
    }
  }
  let largestIndex = 0;
  for(let count = 0; count < numbers.length; count++){
    if(numbers[count] > numbers[largestIndex]){
      largestestIndex = count;
    }
  }
  return (numbers[largestIndex] - numbers[smallestIndex]);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
  const evenArray = [];
  for(let count = 0; count < numbers.length; count++){
    if(numbers[count]%2 === 0){
      evenArray.push(numbers[count]);
    }
  }
  return evenArray;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  const oddArray = [];
  for(let count = 0; count < numbers.length; count++){
    if(numbers[count]%2 !== 0){
      oddArray.push(numbers[count]);
    }
  }
  return oddArray;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const number = convertStringToNumbers(userInputString);
describeNumbers(number);
