/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
    
//     let i = 0;

//     let seed = nums[0];

//     let count = 0;

//     let offset = nums.length % 2 === 0 ? 1 : 0;

//     for(let j = 0; j < nums.length - offset; j++) {
//         let p = (j + k) % nums.length;

//         let temp = nums[p];
//         nums[p] = seed;
//         seed = temp;
//     }

//     // while(count < nums.length - offset) {
//     //     i = (i + k) % nums.length;

//     //     let temp = nums[i];
//     //     nums[i] = seed;
//     //     seed = temp;
//     //     count++;
//     // }

//     console.log(nums);
    
// };

var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k % nums.length));
}


rotate([-1,-100,3,99], 2);
rotate([1,2,3,4,5,6,7], 3);