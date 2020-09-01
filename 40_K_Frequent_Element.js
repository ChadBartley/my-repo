/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    if(!nums || !nums.length) {
        return;
    }
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
           map[nums[i]] = 1;
        }
    }
    
    let sorted = Object.keys(map).sort((a,b) => map[b] - map[a]);
    
    let res = [];
    
    for(let i = 0; i < k; i++) {
        res.push(sorted[i])
    }
    
    return res;
    
};


console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]

