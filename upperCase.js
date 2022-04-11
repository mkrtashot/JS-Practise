let str = "i love you";

function upperCase(str) {
  let arr = str.split(" ");
  let upper = arr.map((element) => {
    return element[0].toUpperCase() + element.slice(1);
  });
  upper = upper.join(" ");
  return upper;
}

console.log("Log ::: upperCase(str) :::", upperCase(str));
