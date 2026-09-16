// Sum of first n numbers
// let sum=0;
// function findSum(n) {
//     if (n==0) return sum;
//     return n + findSum(n-1);
// }
// console.log(findSum(10)) // 15


// Sum of all elements in an array
// const arr=[7,4,5,3,2,0,1];
// function findSumArr(arr) {
//     const findSum = (n) => {
//         if (n===0) return arr[0];
//         return arr[n] + findSum(n-1);
//     }
    
//     return findSum(arr.length-1);
// }
// console.log("Sum of all elements in array :: ", findSumArr(arr));



// Sum of all odd numbers in an array
// const arr = [5,2,0,3,6,7];
// function sumOfAllOddNumbers(n) {
//     if (n<0) return 0;
//     return (arr[n]%2===0 ? 0 : arr[n]) + sumOfAllOddNumbers(n-1);
// }
// console.log("Sum of all odd numbers :: ", sumOfAllOddNumbers(arr.length-1));



// Factorial of a number
// function factorial(n) {
//     if (n===1) return 1;
//     return n*factorial(n-1);
// }
// console.log("Factorial of n :: ", factorial(6));



// Power of 2
// function isPowerOfTwo(n) {
//     if (n===1) return true;
//     else if (n%2!==0 || (n<1)) return false;
//     return isPowerOfTwo(n/2);
// }
// console.log("Power of 2 :: ", isPowerOfTwo(5));



// Find fibonacci number
// function findFibonacci(n) {
//     if (n<=2) return 1;
//     return findFibonacci(n-1) + findFibonacci(n-2);
// }
// console.log("Fibonacci Number :: ", findFibonacci(10));