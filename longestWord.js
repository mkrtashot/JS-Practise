let sentence = "Web Development Tutorial";

function finder(sent) {
  let arr = sent.split(" ");
  let checker = -Infinity;
  let result;

  arr.forEach((element) => {
    if (element.length > checker) {
      result = element;
      checker = element.length;
    }
  });
  return result;
}

console.log("Log ::: finder(sentence) :::", finder(sentence));
