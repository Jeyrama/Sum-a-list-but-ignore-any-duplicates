/*
Please write a function that sums a list, 
but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.
*/


// Solution

function sumNoDuplicates(arr) {
  let sum = 0;
  arr.forEach(num => {
      if (arr.indexOf(num) === arr.lastIndexOf(num)) {
          sum += num;
      }
  });
  return sum;
}

// or