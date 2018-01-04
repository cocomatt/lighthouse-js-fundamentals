function range(start, end, step) {
  if (isNaN(start) || isNaN(end) || isNaN(step) || (end < start) || (step < 0)) {
    return [];
  } else {
    var numbers = [start];
    var stepUp = start;
    while (stepUp < end) {
      stepUp = stepUp + step;
      numbers.push(stepUp);
    }
    return numbers;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
