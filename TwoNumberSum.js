// Brute force solution

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
