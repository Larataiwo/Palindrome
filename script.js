const input = document.getElementById("text-input");
const inputBtn = document.getElementById("check-btn");
const para = document.getElementById("result");

function emptyInput() {
    if(input.value == null || input.value == " " || input.value == "") {
        para.innerText = "";
        alert("Please input a value");
        return false;
        } 
}



const isPalindrome = (str) => {
    var char = /[\W_]/g;
    var lowerCharStr = str.toLowerCase().replace(char, '');
    var reverseStr = lowerCharStr.split('').reverse().join('');
    if (reverseStr === lowerCharStr) {
        para.innerHTML = `<b>${input.value}</b> is a palindrome`;
    } else {
        para.innerHTML = `<b>${input.value}</b> is not palindrome`;
    }
    emptyInput();
 } 
 

inputBtn.addEventListener("click", () => {
    isPalindrome(input.value);
})