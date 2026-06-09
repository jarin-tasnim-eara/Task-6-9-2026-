let a = "hello";
function string(str){

let result = "";

for (let i = str.length - 1; i >= 0; i--) {
  result = result + str.charAt(i);
}
return result;

}

 console.log(string (a));
