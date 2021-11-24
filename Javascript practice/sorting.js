//--------------------------SORTING ALGORITHIM---------------------//
//---------------------------BUBBLE SORT--------------------------//

const arr = [3, 10, -3, 48, 5, 33, 99];

function sortItems(item) {
  const newArr = [...item];
  for (let i = 0; i < newArr.length; i++) {
    let firstElement = newArr[i];
    for (let j = i + 1; j < newArr.length; j++) {
      let secondElement = newArr[j];
      if (firstElement > secondElement) {
        newArr[i] = secondElement;
        newArr[j] = firstElement;
        console.log(newArr);
        firstElement = newArr[i];
        secondElement = newArr[j];
      }
    }
  }
  return newArr;
}

console.log(sortItems(arr));

//----------------O(n^2) quadratic time complexity----------------//

// ----------------QUICK SORT ALGORITHIM-------------------//
let functionCalled = 0;
const arr = [7, 4, 1, 9, 0, 10];
function sort(arr) {
  let copiedArray = [...arr];

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerSubArray = [];

  const largerSubArray = [];

  const pivotElement = copiedArray.shift();

  const centerElementArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotElement) {
      currentElement.push(currentElement);
    }
    if (currentElement < pivotElement) {
      smallerSubArray.push(currentElement);
    }
    if (currentElement > pivotElement) {
      largerSubArray.push(currentElement);
    }
  }

  functionCalled++;

  var smallerElementsArray = sort(smallerSubArray);

  var largerElementsArray = sort(largerSubArray);

  return [
    ...smallerElementsArray,
    ...centerElementArray,
    ...largerElementsArray,
  ];
}

console.log(sort(arr));

//-----------------------O(n*logn)-------------------//

//-----------------------MERGE SORT------------------------//
const arr = [7, 4, 1, 9, 0, 10];

function sort(arr) {
  console.log("ARRAY", arr);
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftSubArray = arr.slice(0, middle);
  const rightSubArray = arr.slice(middle);
  console.log("L", leftSubArray);
  console.log("R", rightSubArray);

  console.log("CALLING 1");
  const leftSortedArray = sort(leftSubArray);
  console.log("LS", leftSortedArray);
  console.log("CALLING 2");
  console.log("R", rightSubArray);
  const rightSortedArray = sort(rightSubArray);
  console.log("RS", rightSortedArray);
  console.log("while....");
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (
    leftIndex < leftSortedArray.length ||
    rightIndex < rightSortedArray.length
  ) {
    if (
      leftIndex >= leftSortedArray.length ||
      leftSortedArray[leftIndex] > rightSortedArray[rightIndex]
    ) {
      mergedArray.push(rightSortedArray[rightIndex]);
      rightIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftIndex]);
      leftIndex++;
    }
  }

  return mergedArray;
}
const sortedArray = sort(arr);
console.log(sortedArray);

//-----------------------O(n * log n)--------------------//
