function contains(array, element) {
  var i = array.length;
  while (i--) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

function lastIndexOf(array, element) {
  for (var i = array.length; i >= 0; i--) {
    if (array[i] === element) {
      return i;
    } else if (array[array.length] === element) {
      return array.length;
    } else if (array.length === 1) {
      return 0;
    //} else if (!Array.isArray(array) || !array.length) {
    //  return -1;
    } else if ((contains(array, element) === false) && (array.legnth !== 1)) {
      return -1;
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([ 3 ], 3), "=?=", 0);
console.log(lastIndexOf([], 3), "=?", -1);