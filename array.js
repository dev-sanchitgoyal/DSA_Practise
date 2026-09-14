// Remove Duplicates from an array
// let arr = [5, 1, 2, 2, 3, 4, 4, 5];
// function removeDuplicates(arr) {
//     // return [...new Set(arr)];
//     let resultArr = [];
//     let set = {};
//     for (let i=0; i<arr.length; i++) {
//         if (!set[arr[i]]) {
//             resultArr.push(arr[i]);
//         }
//         set[arr[i]] = true;
//     }
//     return resultArr;
// }
// console.log('Removed duplicates : ', removeDuplicates(arr));


// Remove duplicates from array in place
// let ar = [1, 1, 1, 2, 2, 3, 4, 4, 5];
// function removeDuplicatesInPlace(arr) {
//     if (arr.length < 2) return arr;
//     let index = 1;
//     let lastItem = arr[0];
//     for (let i=1; i<arr.length; i++) {
//         if (arr[i] !== lastItem) {
//             arr[index] = arr[i];
//             lastItem = arr[i];
//             index += 1;
//         }
//     }
//     return arr;
// }
// console.log('Removed duplicates in place : ', removeDuplicatesInPlace(ar));



// Remove element from array in place
// let arr = [3, 2, 1, 5, 3, 4, 8, 3, 2, 1];
// function removeElementInPlace(arr, val) {
//     // return arr.filter((item) => item !== val);
//     let index = 0;
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] !== val) {
//             arr[index] = arr[i];
//             index++;
//         }
//     }
//     return arr;
// }
// console.log('Removed element in place : ', removeElementInPlace(arr, 3));


// Reverse string
// let arr = ["S", "a", "n", "c", "h", "i", "t"];
// function reverseString(arr) {
//     // return arr.reverse();
//     let arrLen = arr.length;
//     for (let i=0; i<Math.floor(arrLen/2); i++) {
//         let temp = arr[i];
//         arr[i] = arr[arrLen-1-i];
//         arr[arrLen-1-i] = temp;
//     }
//     return arr;
// }
// console.log("Reversed :: ", reverseString(arr));


// Best time to buy and sell stocks
// let stockPrices = [7, 1, 3, 5, 6, 4, 2];
// let stockPrices = [1, 3, 5, 7, 2, 8, 10];
// function buySellStocks(arr) {
//     let maxProfit = 0;
//     let min = arr[0];
//     for (let i=1; i<arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         } else {
//             maxProfit = Math.max(maxProfit, arr[i] - min);
//         }
//     }
//     return maxProfit;
// }
// console.log("Max profit :: ", buySellStocks(stockPrices));



// Merge sorted arrays
// let arr1 = [0,0,0,1,2,3,8,9];
// let arr2 = [1,2,2,3,5,6,7,8,10,12];
// function mergeSortedArr(arr1, arrr2) {
//     let sortedArr = [];
//     let i=0, j=0;
//     while (i<arr1.length || j<arr2.length) {
//         if (i >= arr1.length) {
//             sortedArr.push(arr2[j]);
//             j++;
//             continue;
//         }
//         if (j >= arr2.length) {
//             sortedArr.push(arr1[i]);
//             i++;
//             continue;
//         }
//         if(arr1[i] <= arr2[j]) {
//             sortedArr.push(arr1[i]);
//             i++;
//         } else {
//             sortedArr.push(arr2[j]);
//             j++;
//         }
//     }
//     return sortedArr;
// }
// console.log("Merged sorted arrays :: ", mergeSortedArr(arr1, arr2));


// Merge sorted arrays in place (Using extra memory space)
// let arr1 = [1,2,3,5,10,0,0,0,0,0];
// let arr2 = [2,5,6,9,12];
// function mergeSortedArrInPlace(arr1, arr2) {
//     let i=j=0;
//     let index = 0;
//     let arr1Copy = arr1.slice(0, arr2.length);
//     while(i<arr1Copy.length && j<arr2.length) {
//         if (arr1Copy[i] <= arr2[j]) {
//             arr1[index]=arr1Copy[i];
//             i++;
//         } else {
//             arr1[index]=arr2[j];
//             j++;
//         }
//         index++;
//     }
//     if (i<arr1Copy.length) {
//         while(i<arr1Copy.length) {
//             arr1[index]=arr1Copy[i];
//             i++;
//             index++;
//         }
//     } else {
//         while(j<arr2.length) {
//             arr1[index]=arr2[j];
//             j++;
//             index++;
//         }
//     }
//     return arr1;
// }

// Smart Solution - 
// function mergeSortedArrInPlaceV2(arr1,m,arr2,n) {
//     let arr1Copy = arr1.slice(0,m);
//     let p1=p2=0;
//     for (let i=0; i<m+n; i++) {
//         if ((p2>=n) || (p1<m && arr1Copy[p1]<=arr2[p2])) {
//             arr1[i]=arr1Copy[p1];
//             p1++;
//         } else {
//             arr1[i]=arr2[p2];
//             p2++;
//         }
//     }
//     return arr1;
// }

// console.log("Merged sorted arrays in place with extra memory :: ", mergeSortedArrInPlace(arr1, arr2));
// console.log("Merged sorted arrays (Smarter Solution) :: ", mergeSortedArrInPlaceV2(arr1,5,arr2,5));


// Merge sorted arrays in place (Without using extra memory space)
// let arr1 = [1,2,3,5,10,0,0,0,0,0];
// let arr2 = [2,5,6,9,12];
// function mergeSortedArrInPlaceV3(arr1,m,arr2,n) {
//     let p1=m-1;
//     let p2=n-1;
//     for(i=m+n-1; i>=0; i--) {
//         if(p2<0) break;
//         if(p1>=0 && arr1[p1]<=arr2[p2]) {
//             arr1[i]=arr2[p2];
//             p2--;
//         } else {
//             arr1[i]=arr1[p1];
//             p1--;
//         }
//     }
//     return arr1;
// }
// console.log("Merged sorted arrays in place without extra memory :: ", mergeSortedArrInPlaceV3(arr1,5,arr2,5));



// Move zeroes to last
// const arr1=[0,1,0,3,12];
// const arr1=[7,8,0,1,0,0,0,3,12,0,8,7];
// function moveZeroes(arr) {
//     if (arr.length < 2) return arr;
//     let p1;
//     for(let i=0; i<arr.length ;i++) {
//         if (arr[i] === 0) {
//             p1 = p1 ?? i;
//         } else if (p1 !== undefined) {
//             arr[p1]=arr[i];
//             arr[i]=0;
//             p1++;
//         }
//     }
//     return arr;
// }
// console.log("Move zeroes :: ", moveZeroes(arr1));


// Consecutive ones
// const arr1=[1,1,0,1,1,1,0,1,1,1,1];
// function consecutiveOnes(arr) {
//     if (arr.length < 2) return arr;
//     let maxCount=0;
//     let count=0;
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]===1) {
//             count++;
//         } else {
//             maxCount=Math.max(maxCount, count);
//             count=0;
//         }
//     }
//     return Math.max(maxCount, count);
// }
// console.log("Consecutive ones :: ", consecutiveOnes([1,1,0,1,1,1,0,1,1,1,1]));



// Find missing number
// const arr=[9,6,4,2,3,5,7,0,1];
// function findMissingNumber(arr) {
//     let n=arr.length;
//     let sumAll=n*(n+1)/2;
//     let sumArr=arr.reduce((acc, curr) => acc+curr,0);
//     return sumAll-sumArr;
// }
// console.log("Missing number :: ", findMissingNumber(arr));



// Find single number occurence
// const arr=[4,1,2,1,2];
// function findSingleNumber(arr) {
//     // Smart solution - using XOR
//     // let xor=0;
//     // for(let i=0; i<arr.length; i++) {
//     //     xor ^= arr[i];
//     // }
//     // return xor;

//     let dict={};
//     for(let i=0; i<arr.length; i++) {
//         if(dict[arr[i]]) {
//             delete dict[arr[i]];
//         } else {
//             dict[arr[i]] = true;
//         }
//     }
//     return Object.keys(dict)[0];
// }
// console.log("Single occurence number is :: ", findSingleNumber(arr));