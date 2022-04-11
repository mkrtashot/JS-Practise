function sum(arr) {
  return arr.reduce((acc, item) => {
    return (acc = acc * item);
  });
}

console.log("Log ::: sum([1,2,3,4]) :::", sum([1, 2, 3, 4]));
