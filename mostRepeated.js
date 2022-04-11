function mostRepeated(arr) {
  let check = {};
  arr.forEach((element) => {
    if (check[element]) {
      check[element]++;
    } else {
      check[element] = 1;
    }
  });

  let count = 0;
  let result;

  for (key in check) {
    if (check[key] > count) {
      count = check[key];
      result = key;
    }
  }
  return result;
}

console.log(
  "Log ::: mostRepeated([1,2,3,3,3,4,5]) :::",
  mostRepeated([1, 2, 3, 3, 3, 4, 5])
);
