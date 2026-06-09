
let a = "racecar";
function palindromeCheck(str){
let palindrome = true;

for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        palindrome = false;
    }
}
return palindrome;
}
console.log(palindromeCheck(a) ? "Palindrome" : "Not Palindrome");
   
