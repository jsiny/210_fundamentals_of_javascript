let arr1 = [1, 2, undefined, 4];
arr1.length; // 4
// The length is the highest index position that has a value + 1.

let arr2 = [1];
arr2.length = 5; 
arr2.length; // 5
// You can manually send the length of an array, and it overrides the length that comes from the highest index position that has a value assigned to it.

let arr3 = [];
arr3[-1] = [1];
arr3.length; // 0
// Index positions must be non negative integers starting from 0. Other indexes don't get taken into account when determining an array's length.

let arr4 = [1, 2, 3, 4, 5];
arr4.length = 3;
arr4.length; // 3
// The array's length of 5 is overriden by the manual assigning of the length. The array gets truncated.

let arr5 = [];
arr5[100] = 3;
arr5.length; // 101
// The length is the highest index position that has a value + 1.