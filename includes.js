let str = "Hello";
let subStr = "ello";

function checker(str, subStr) {
  let check = 0;
  let indexSave = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i] === subStr[j]) {
        check++;
        i++;
      } else {
        i = indexSave;
        check = 0;
      }
      if (check === subStr.length) {
        return true;
      }
    }
    indexSave++;
  }
  return false;
}

console.log("Log ::: checker(str,subStr) :::", checker(str, subStr));
