// Challenge 1 > Get 1 to 255
// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.

function get_array(val) {
	var arr = []
	// your code here
  for(let i = 1; i <= val; i++) {
    arr.push(i);
  }

	return arr;
}
console.log(get_array(255));

// Challenge 1 > Get even 1000
//	Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
function sum_even_numbers(num) {
	var sum = 0;
	// your code here
  for(let i=1; i<=num; i++) {
    if(num % i == 0) {
      sum = sum + i;
    }
  }
  
	return sum;
}
console.log(sum_even_numbers(1000))

// Challenge 3 > Sum odd 5000
// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
function sum_odd_5000(num) {
  let sum = 0
  // your code here
  for(let i = 0; i <= num; i++) {
    if(num % i != 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sum_odd_5000(5000))


// Challenge 4 > Iterate an array
// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

// Write a function that takes an array as an argument and iterates through each member of the array and returns the sum of all values. Being able to loop through each member of the array is extremely important. 

// Test cases: [0] returns 0, [1,2,3] returns 6, [5,10, 15, -5] returns 25
function iterate_array(arr) {
  var sum = 0;
  // your code here
  for (i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}
console.log(iterate_array([5,10, 15, -5]))

// Challenge 5 > Find max
// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function find_max(arr) {
  let max = arr[0]
  for (i = 1; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i]
    }
  }

  return max
}
console.log(find_max([-3,12,3,5,7,11]))


// Challenge 6 > Find average
// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function find_avg(arr) {
  // your code here
var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
  return avg
}
console.log(find_avg([1,3,5,7,20]))


// Challenge 7 > Array odd
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function add_odd_numbers(num){
  let sum = [];
  for(let i=1; i<num; i+=2) {
    sum.push(i)
  }
 return sum 
}
console.log(add_odd_numbers(200))


// Challenge 8 > Greater than Y
// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterY(arr, y) {
  let count = 0
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > y) {
      count += 1
    }
  }
  return count
}
console.log(greaterY([1,3,4,7],6))


// Challenge 9 > Squares
// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareInt(arr) {
  for(let i=0; i< arr.length; i++) {
    arr[i] = arr[i] * arr[i]
  }
  return arr
}
console.log(squareInt([1,5,7,6,4]))


// Challenge 10 > Negatives
// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNegative(arr) {
  // your code here
  for(let i=0; i<arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0
    }
  }
  return arr
}
console.log(noNegative([1,5,-4,-3, 8,-5]))

// Challenge 11 > Max/Min/Avg
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr) {
    //your code here 
    let max = arr[0] // set the variable max and that would be equal to the first value of array
    let min = arr[0]
    let sum = arr[0]
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < max) {
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i]
    }
    let avg = sum / arr.length

    newArr = [max, min, avg]
    return newArr; 
}


// Full name, add last name to the end of names in an array

const names = ['Srinivas', 'Usha', 'Ashmitha', 'Shreshta'];

const fullNames = names.map(function(name) {
  return `${name} Padma`;
});

console.log(fullNames);
//12
// FAHRENHEIT to CELSIUS
function fahrenheitToCelsius(fahrenheit){
  celsius = (fahrenheit-32) * 5/9;
  return celsius;
}

console.log(fahrenheitToCelsius(38));

//13
//LAST DIGIT: Create the function `lastDigit` that accepts two non-negative integer values and returns `true` if they have the same last digit, such as 27 and 57.

function lastDigit(num1,num2){
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1[num1.length-1] === num2[num2.length-1]){
    return true;
  } else {
    return false;
  }
}
console.log(lastDigit(77,997));
//14
//ASK POLITELY: Create the function askPolitely that accepts a sentence as an argument. If the last character of the sentence is a question mark, then make sure the question ends with the word "please".
// If the sentence is not a question, then return the 
// inputted string without modification. If the sentence 
// is a question, but already has a please, then also
// return the input without modification.

function askNicely(sentence){
  if(sentence[sentence.length-1] === "?"){
    if (sentence.slice(-7) === "please?"){
    return sentence;
    } else {
      //below slice returns the entire sentence minus the last digit which is the question mark.
      return sentence.slice(0,-1) + " please?";
    }
  } else {
    return sentence;
  }
}
console.log(askNicely("What time is it?"))

//15
//Create the function If your name starts with the letter "J" or "j", you are playing the Drums!

function doYouPlayTheDrums(name){
  if (name[0].toUpperCase() === "J"){
    return name + " plays the Drums.";
  } else {
    return name + " does not play the Drums.";
  }
}
console.log(doYouPlayTheDrums("Jake"));

//16
// REVERSE A STRING: Create the function that reverses a string and returns the value of the reversed string. 

function reverseString(string){
  var finalString = ""
  for (var lastLetter = string.length -1; lastLetter >= 0; lastLetter--){
    finalString = finalString + string[lastLetter];
  }
  return finalString;
}
console.log(reverseString("reverse"));
//17
//SUM OF DIGITS: Create the function that adds individual digits of a number and return the sum.

function sumOfDigits(num) {
  var sum = 0;             
  while (num > 0) {        
    sum = sum + num%10;
    num = Math.floor(num/10);
  }
  return sum;
}
console.log(sumOfDigits(222));

//18
//FACTORIAL: Create the function that returns the factorial of the parameter.

function factorial(num){
  var total = 1;     
  for (num; num > 0; num--){
    total = total * num
  }
  return total;
}
console.log(factorial(5));

//19 
//VOWEL COUNT: Create the function that takes a str parameter and returns the number of vowels.

function vowelCount(string){
  var count = 0;
  var vowels = "aeiou";
  var string = string.toLowerCase();
  for (i = 0; i < string.length; i++){
    if (vowels.indexOf(string[i]) > -1)  {
        count++;
      }
  }
return count;
}
console.log(vowelCount("how many vowels?"));

//20
// REPEAT A STRING : Create a function "repeat" that accepts two arguments, the string to repeat and the a number that represtents how many times to repeat the string argument.  Return a string that concatenates all the times the string is repeated.

function repeat(string, num){
  var text = "";
  while (num > 0){
    text += `${string}  `;
    num--;
  }
    return text;
}
console.log(repeat("five",5));

//21
//create a function that accepts an array of strings and returns the longest string

function longestString(arr) {
	var longest = ''; // Step 0
	for (var i = 0; i < arr.length; i++) { 
		if (arr[i].length > longest.length) {
			longest = arr[i];
		}
	}
	return longest;
}
console.log(longestString(["which","word","is","longest"]))
