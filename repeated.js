const arr = [1, 1, 2, 2, 3, 4, 4];

let sorted = new Set(arr);

console.log("Log ::: sorted :::", sorted);

/// alternative

function sort(arr) {
  let finalArr = [];

  arr.forEach((element) => {
    if (!finalArr.includes(element)) {
      finalArr.push(element);
    }
  });

  return finalArr;
}

console.log("Log ::: sort(arr) :::", sort(arr));
