/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let foundVals = {};
    
    for(let num of nums) {
        if(!foundVals[num]) {
            foundVals[num] = 1;
        } else {
            foundVals[num] += 1;
            
            if (foundVals[num] >= nums.length / 2) {
                return num;
            }
        }
    }
    
};


console.log(majorityElement([3,2,3]));