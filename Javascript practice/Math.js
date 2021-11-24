//TIme Complexity
function sumUp(n) {
  let results = 0;
  for (let i = 1; i < n; i++) {
    results += i;
  }
  return results;
}

function time(n) {
  let start = performance.now();
  sumUp(n);
  let end = performance.now();
  let total = end - start;
  return total;
}
//
let arr = [10, 12, 13, 14, 10, 11];

function sum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    console.log(i);
    sum += arr[i];
  }
  return sum;
}

// console.log(sum(arr));

function reduce(num) {
  let sum = num.reduce((pre, cur) => pre + cur, 0);
  return sum;
}

// console.log("reduce", reduce(arr));

//MATH
////////////////////////////////////////////////////// FIBBONACCI PROBLEM////////////////////////////////////////////////

let sequence = [1, 1];
function seq(num) {
  for (let i = 2; i < num + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
}

// seq(9);
// console.log([sequence]);
//                                                      O(n)
/////////////////////////////////////////////////PRIMALITY TEST/////////////////////////////////////////////////////////////

function isPrime(n) {}

isPrime(21);

//                                             O(1)

//    Find smallest number in an array
let num = [12, 2, 34, 13, 56, 72, 1];

function getSmallestNumber(n) {
  let currentMin = n[0];
  for (let i = 0; i <= n.length; i++) {
    if (n[i] < currentMin) {
      currentMin = n[i];
    }
  }
  return currentMin;
}

console.log(getSmallestNumber(num));
//                                     O(n)

//  Find Odd and Even Number

function oddEven(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//                                       O(1)

// console.log(oddEven(3));

//-------------------IS POWER OF TWO----------------------//

function isPowerOfTwo(number) {
  let devidedNumber = number;
  if (number < 0) {
    return false;
  }
  while (devidedNumber !== 1) {
    console.log(devidedNumber / 2);
    if (devidedNumber % 2 !== 0) {
      return false;
    }
    devidedNumber = devidedNumber / 2;
  }
  return true;
}

//----------------TIME COMPLEXITY-----------------//
//BEST CASE===>    devidedNumber % 2 !== 0
//WORST CASE===> FOR A LARGE NUMBER  O(log n)

// isPowerOfTwo(16);

//--------------------FACTORIAL----------------//

function getFactorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    console.log(`${result} * ${i}`);
    result = result * i;
  }
  return console.log(result);
}

// getFactorial(3);

//---------------------RECURSIVE APPROACH-------------------//

function getFactorial(number) {
  console.log(number);
  if (number <= 1) {
    return 1;
  }
  return number * getFactorial(number - 1);
}
// console.log(getFactorial(4));
