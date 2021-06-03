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

  return avg
}
console.log(find_avg([1,3,5,7,20]))


// Challenge 7 > Array odd
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function add_odd_numbers(num){
  let sum = [];
  for(let i=1; i<num; i+=2) { //if you want to return all even numbers, change the i=1 to i=0 or 2
    sum.push(i)
  }
 return sum 
}
console.log(add_odd_numbers(500))


// Challenge 8 > Greater than Y
// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterY(arr, y) {
  let count = 0
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > y) {
      count += 1
    }
  }
}
console.log(greaterY([1,3,4,7]))


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