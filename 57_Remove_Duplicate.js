/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let map = {};
    
    for(let num of nums) {
        if(map[num]) {
            
            if(map[num] <= 1) {
                map[num] += 1;
            }
        } else {
            map[num] = 1;
        }
    }
    
    let mine = ''
    
    let keys = Object.keys(map);
    
    for(let key of keys) {
        for(let i = 0; i < map[key]; i++) {
            mine = mine + `${key}`;
            console.log(`mine: ${mine}`);
        }
    }
    
    return mine.split('');
};

console.log(removeDuplicates([1,1,1,2,2,3]));