/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
          nums[i] = nums[i - 1];
        }
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
    return true;
    
};

// console.log(checkPossibility([4,2,1])); // false
// console.log(checkPossibility([3,4,2,3])); // false
console.log(checkPossibility([4,2,3])); // true
// console.log(checkPossibility([5,7,1,8])); // true