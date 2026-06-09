
let str = "hello";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
  result = result + str.charAt(i);
}
console.log(result);
