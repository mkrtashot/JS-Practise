let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function rec(nested) {
  console.log("Log ::: nested.value :::", nested.value);
  if (nested.next) {
    rec(nested.next);
  }
}

rec(list);
