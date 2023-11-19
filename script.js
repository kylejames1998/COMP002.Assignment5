// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const range = function(num1, num2) {
    let array = [];
    for (let n = num1; n <= num2; n++) {
        array.push(n);
    }
    return array;
}

console.log(range(1,10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

const sum = function(array) {            
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(sum(range(1, 10))); // 55
console.log(sum(range(2, 6))); // 20


// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

const reverseArray = function(array) {
    let reversed = [];
    for (let n = array.length - 1; n >= 0; n--) {
        reversed.push(array[n]);

    }
    return reversed;
}

console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"]
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1] 



const reverseArrayInPlace = function(array) {
    for (let i = 0; i < array.length / 2; i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

  let array = [1, 2, 3, 4, 5];
  reverseArrayInPlace(array);
  console.log(array); // [5, 4, 3, 2, 1]