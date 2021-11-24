const reverseString = (str) => {
  console.log(str);
  //
  if (!str) {
    return str;
  } else {
    return reverseString(str.substr(1)) + str[0];
  }
};
console.log(reverseString("hello"));

function sumRange(num) {
  if (num <= 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}
console.log(sumRange(3));

// sumRange(3)
//         return 3 + sumRange(2)
//                     return 2 + sumRange(1)
//                                 return 1 ----Base condition
//                                   1
//                             2  +  1
//                     3 + 3
//               6
