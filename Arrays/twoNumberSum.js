// Two Number Sum solved in multiple ways with time and space complexities

// Solution 1: Brute force solution with nested for loops
function twoNumberSum(array, targetSum) {
  let targetArr = [];
  for (let i = 0; i < array.length; i++) {
    let elem1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let elem2 = array[j];
      if (elem1 + elem2 === targetSum) {
        targetArr.push(elem1, elem2);
      }
    }
  }
  return targetArr;
}

// Time: O(N^2) for iterating N times through an array of N values
// Space: O(N) to create an array

function twoNumberSum(array, targetSum) {
  console.log(array.sort());
  array.sort(function (a, b) {
    return a - b;
  });
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
