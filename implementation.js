Array.prototype.fakeMap = function (callback) {
  let arr = this;

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

Array.prototype.fakeReduce = function (callback, initialValue) {
  let arr = this;

  let accumulator;

  let start;

  if (initialValue) {
    accumulator = initialValue;
    start = 0;
  } else {
    accumulator = arr[0];
    start = 1;
  }

  for (let i = start; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};
