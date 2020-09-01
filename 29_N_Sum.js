/**
 * @param {number[]} nums
 * @return {number}
 */
// var arrayPairSum = function(nums) {
    
//     if(nums.length === 2) {
//         return Math.min(...nums)
//     }
    
//     let n = nums.length / 2;
    
//     nums = nums.sort();
    
//     return Math.min(...nums.slice(0, n)) + Math.min(...nums.slice(n, nums.length));
    
// };

var arrayPairSum = function(nums) {
    
    nums = nums.sort((a, b) => a - b);

    let sum = 0;

    for(let i = 0; i < nums.length; i += 2) {
        sum += Math.min(...nums.slice(i, i + 2));
    }

    return sum;
    
};

console.log(arrayPairSum([1,4,3,2]));
console.log(arrayPairSum([-470, 66, -4835, -5623]));
console.log(arrayPairSum([7,3,1,0,0,6]));