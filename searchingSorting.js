// Binary Search
// const arr = [-1,0,3,5,7,9,12]
// function searchEl(arr, target) {
//     let left=0, right=arr.length-1;
//     while(left<=right) {
//         let middle=Math.floor((left+right)/2);
//         if (arr[middle]===target) return middle;
//         if (arr[middle]<target) {
//             left=middle+1;
//         } else {
//             right=middle-1;
//         }
//     }
//     return -1;
// }
// console.log("Index of searched element is :: ", searchEl(arr,7));



// Bubble Sort
// const arr=[5,0,1,2,7,9,3,4];
// function bubbleSort(nums) {
//     if (nums.length < 2) return nums;

//     const sort = (arr, index) => {
//         // if (index === 0) return arr;
//         let isSwapped = false;
//         for(let i=0; i<index; i++) {
//             if(arr[i] > arr[i+1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//                 isSwapped = true;
//             }
//         }
//         if (!isSwapped) return arr;
//         return sort(arr, index-1);
//     }
//     return sort(nums, nums.length-1);
// }
// console.log("Bubble sorted array :: ", bubbleSort(arr));



// Selection Sort
// const arr=[5,0,1,2,7,9,3,4];
// function selectionSort(arr) {
//     if (arr.length < 2) return arr;
//     const sort = (nums, index) => {
//         if (index === nums.length-1) return nums;
//         let minIndex=index;
//         for(let i=index; i<nums.length; i++) {
//             if (nums[i] < nums[minIndex]) {
//                 minIndex=i;
//             }
//         }
//         if (index !== minIndex) {
//             let temp = nums[index];
//             nums[index] = nums[minIndex];
//             nums[minIndex] = temp;
//         }
//         return sort(nums, index+1);
//     }
//     return sort(arr, 0);
// }
// console.log("Selection sorted array :: ", selectionSort(arr));



// Insertion Sort - using loops
// const arr=[5,0,1,2,7,9,3,4];
// function insertionSort(arr) {
//     if (arr.length < 2) return arr;
//     for(let i=1; i<arr.length; i++) {
//         let temp = arr[i]
//         let prev = i-1;
//         while(prev >=0 && arr[prev] > temp) {
//             arr[prev+1] = arr[prev];
//             prev--;
//         }
//         arr[prev+1]=temp;
//     }
//     return arr;
// }
// console.log("Insertion sorted array :: ", insertionSort(arr));



// Merge sort
// const arr=[5,0,1,2,7,9,3,4];
// const merge = (arr1, arr2) => {
//     let i=j=0;
//     let result=[];
//     while(i<arr1.length && j<arr2.length) {
//         if(arr1[i]<=arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i<arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j<arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;
// };
// function mergeSort(arr) {
//     if (arr.length < 2) return arr; 
//     let middle = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,middle));
//     let right = mergeSort(arr.slice(middle));
//     return merge(left, right);
// }
// console.log("Merge sorted array :: ", mergeSort(arr));