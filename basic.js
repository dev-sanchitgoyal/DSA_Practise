// Practise loop problems

// Star patterns
// for (let i=0; i<4; i++) {
//     let str = "";
//     for (let j=0; j<4; j++) {
//         str += " * ";
//     }
//     console.log(str);
// }
// for (let i=0; i<4; i++) {
//     let str = "";
//     for (let j=0; j<=i; j++) {
//         str += " * ";
//     }
//     console.log(str);
// }
// for (let i=5; i>0; i--) {
//     let str = "";
//     for (let j=0; j<i; j++) {
//         str += " * ";
//     }
//     console.log(str);
// }
// for (let i=0; i<5; i++) {
//     let str = "";
//     for (let j=0; j<5; j++) {
//         str += (i + j >= 4) ? " * " : "   ";
//     }
//     console.log(str);
// }

// Number patterns
// for (let i=1; i<=5; i++) {
//     let str = "";
//     for (let j=1; j<=i; j++) {
//         str += ` ${j} `;
//     }
//     console.log(str);
// }
// for (let i=1; i<=5; i++) {
//     let str = "";
//     for (let j=1; j<=i; j++) {
//         str += ` ${i} `;
//     }
//     console.log(str);
// }
// for (let i=5; i>=0; i--) {
//     let str = "";
//     for (let j=1; j<=i; j++) {
//         str += ` ${j} `;
//     }
//     console.log(str);
// }

// Other patterns
// for (let i=0; i<8; i++) {
//     let str = "";
//     let isprevZero = true;
//     for (let j=0; j<=i; j++) {
//         str += isprevZero ? " 1 " : " 0 ";
//         isprevZero = !isprevZero;
//     }
//     console.log(str);
// }
// let isprevZero = true;
// for (let i=0; i<8; i++) {
//     let str = "";
//     for (let j=0; j<=i; j++) {
//         str += isprevZero ? " 1 " : " 0 ";
//         isprevZero = !isprevZero;
//     }
//     console.log(str);
// }



// Count the number of digits in a number
// let num = -123456789;
// let count = 0;
// function countDigits(val) {
//     let num = Math.abs(val);
//     // return String(num).length;
//     if (num ===0)  return 1;
//     while (num > 0) {
//         num = Math.floor(num / 10);
//         count++;
//     }
//     return count;
// }
// console.log(`Number of digits in ${num} is ${countDigits(num)}`);


// Palindrome number
// let num = 12321;
// function isPalindrome(val) {
//     if (val < 0) return false;
//     let str = String(val);
//     // return str === str.split("").reverse().join("");
//     let reversedStr = "";
//     while (num > 0) {
//         reversedStr += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return str === reversedStr;
// }
// console.log(`Is ${num} a palindrome? - ${isPalindrome(num)}`);



// Reverse integer
// let num = 2**31;
// function reverseInteger(num) {
//     if (num < 0) {
//         return -1 * reverseInteger(-num);
//     }
//     let reversedStr = "";
//     while (num > 0) {
//         reversedStr += num % 10;
//         num = Math.floor(num / 10);
//     }
//     let reverseInt =  parseInt(reversedStr);
//     if (reverseInt >= 2**31 || reverseInt <= -(2**31)) return 0;
//     return reverseInt;
// }
// console.log(`Reversed integer: ${reverseInteger(num)}`);