var n = 100;

while (n <= 200) {
  if ((n % 3 === 0) && (n % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if ((n % 3 !== 0) && (n % 4 !== 0)) {
    console.log(n);
  } else if (n % 3 === 0) {
    console.log("Loopy");
  } else if (n % 4 === 0) {
    console.log("Lighthouse");
  }
  n++;
}
