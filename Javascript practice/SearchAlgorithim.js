//------------------------LINEAR SEARCH--------------------------//
let arr = [3, 4, 55, 39, 10, 13];
function findElement(arr, element) {
  let index = 0;
  //For primitive
  for (const i of arr) {
    if (i === element) {
      return index;
    }
    index++;
  }
}
// console.log(findElement(arr, 10));
//For Object
let obj = [
  { name: "ali", age: 13 },
  { name: "mohsin", age: 23 },
  { name: "Faisal", age: 18 },
];

function findElementInObject(arr, element) {
  let index = 0;
  for (const i of arr) {
    if (i.name === element.name && i.age === element.age) {
      return index;
    }
    index++;
  }
}
// console.log(findElementInObject(obj, { name: "Faisal", age: 18 }));

//-------------------------BINERY SEARCH-------------------//

let arr = [1, 5, 9, 13, 99, 100, 106, 119, 100, 500];

function findElement(sortedArr, element) {
  let startInd = 0;
  let endInd = sortedArr.length - 1;

  while (startInd <= endInd) {
    console.log("runing...");
    let middleInd = startInd + Math.floor((endInd - startInd) / 2);
    if (sortedArr[middleInd] === element) {
      return middleInd;
    }
    if (sortedArr[middleInd] < element) {
      startInd = middleInd + 1;
    } else {
      endInd = middleInd - 1;
    }
  }
}

// console.log(findElement(arr, 119));

//--------------BINERY SEARCH RECURSIVE WAY---------------------//
let arr = [1, 5, 9, 13, 99, 100];
function findElement(sortedArr, element, offset) {
  let startInd = 0;
  let endInd = sortedArr.length - 1;

  let middleInd = startInd + Math.floor((endInd - startInd) / 2);

  if (element === sortedArr[middleInd]) {
    return middleInd + offset;
  }

  if (sortedArr[middleInd] < element) {
    startInd = middleInd + 1;
    offset = offset + middleInd + 1;
  } else {
    endInd = middleInd - 1;
  }
  return findElement(sortedArr.slice(startInd, endInd + 1), element, offset);
}

// console.log(findElement(arr, 99, 0));

//---------------------O(log n)----------------------//
