function reverseNumber(num) {
   const numberArrary = num.split("");
   const reversedNumberArray = numberArrary.reverse().join("");
   const reversedNumber = parseInt(reversedNumberArray);
   return reversedNumber;
}

let num = prompt("Enter the number")

num = reverseNumber(num.toString());

console.log(num);