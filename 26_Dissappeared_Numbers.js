/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
    
//     let all = {
        
//     }
    
//     for(let i = 1; i <= nums.length; i++) {
//         all[i] = false;
//     }
    
//     for(let i = 0; i < nums.length; i++) {
//         all[nums[i]] = true;
//     }
    
//     return [...Object.keys(all).filter((k,p) => {
//         console.log(`k: ${k} -- p: ${p}`);
//         return !all[k];
//     })];
    
// };

var findDisappearedNumbers = function(nums) {
    
    let set = new Set(nums);

    let res = [];

    for(let i = 1; i <= nums.length; i++) {
        if(!set.has(i)) {
            res.push(i)
        }
    }

    return res;
    
};

console.log(findDisappearedNumbers([1,1]));