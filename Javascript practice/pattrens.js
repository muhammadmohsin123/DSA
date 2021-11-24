//----------------------FREQUENCY COUNTER-----------------------//

function getFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let i of arr1) {
    if (obj1[i] > 0) {
      obj1[i]++;
    } else {
      obj1[i] = 1;
    }
  }
  for (let j of arr2) {
    if (obj2[j] > 0) {
      obj2[j]++;
    } else {
      obj2[j] = 1;
    }
  }
  for (let keys in obj1) {
    if (!obj2[keys ** 2]) false;

    if (obj1[keys] !== obj2[keys ** 2]) false;
  }
  return true;
}

console.log(getFrequency([1, 2, 3, 2], [4, 9, 4, 1]));
//----------------------FREQUENCY COUNTER-----------------------//
//------------------------ANAGRAM-------------------------------//
function getFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let i of arr1) {
    if (obj1[i] > 0) {
      obj1[i]++;
    } else {
      obj1[i] = 1;
    }
  }
  for (let j of arr2) {
    if (obj2[j] > 0) {
      obj2[j]++;
    } else {
      obj2[j] = 1;
    }
  }
  console.log(obj1, obj2);
  for (let keys in obj1) {
    console.log(keys, ":", obj1[keys], " ", keys, ":", obj2[keys]);
    console.log(obj1[keys] === obj2[keys]);
    if (!obj2[keys]) {
      return false;
    }

    if (obj1[keys] !== obj2[keys]) {
      return false;
    }
  }
  return true;
}

console.log(getFrequency("anagram", "nagaram"));

//---------------------MULTIPLE POINTER PATTREN-------------------//
//----------------------NAIVE SOLUTION-----------------------------------//
//FIND FIRST PAIR WHOSE SUM IS ZERO.
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return `${i} ${j}`;
      }
    }
  }
}
// console.log(sumZero([-4, -2, -1, 0, 1, 2, 3]));

function sumPairZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [left, right];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumPairZero([-4, -2, -1, 0, 1, 2, 3]));
