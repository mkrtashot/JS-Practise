let obj = {
  test: "test",
  get date() {
    return new Date();
  },
};

console.log("Log ::: obj.date :::", obj.date);
