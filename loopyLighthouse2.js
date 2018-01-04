var range = [15, 90];
var multiples = [2, 5];
var words = ["Batty", "Beacon"];

var n = range[0];

function loopyLighthouse(range, multiples, words) {

  while (n <= range[1]) {
    if ((n % multiples[0] === 0) && (n % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if ((n % multiples[0] !== 0) && (n % multiples[1] !== 0)) {
      console.log(n);
    } else if (n % multiples[0] === 0) {
      console.log(words[0]);
    } else if (n % multiples[1] === 0) {
      console.log(words[1]);
    }
    n++;
  }
}

console.log(loopyLighthouse(range, multiples, words));
