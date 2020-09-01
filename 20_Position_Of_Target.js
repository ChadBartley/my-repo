/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let startIndex = startIndexRecursive(nums,target, 0, nums.length -1);
    
    if(!startIndex && startIndex !== 0) {
        return [-1,-1];
    }

    let leftPointer = startIndex;
    let rightPointer = startIndex;
    
    while(nums[leftPointer] === target || nums[rightPointer] === target) {
        if(nums[leftPointer] === target) {
            leftPointer -= 1;
        }
        
        if(nums[rightPointer] === target) {
            rightPointer += 1;
        }
    }
    
    return [leftPointer + 1, rightPointer -1]
    
};

function startIndexRecursive(nums, target, start, end) {
    
    if(!nums || nums.length === 0) {
        return;
    }

    if(start > end) {
        return;
    }

    if(start === end) {
        if(nums[start] === target) {
            return start;
        } else {
            return;
        }
    }
    
    let index = Math.floor((end + start) / 2)
    
    let middle = nums[index];
    
    if(middle === target) {
        return index;
    } else if( middle > target) {
        return startIndexRecursive(nums, target, start, index -1);
    } else {
        return startIndexRecursive(nums, target, index + 1, end);
    }
    
}


// console.log(searchRange([5,7,7,8,8,10], 8));
// console.log(searchRange([5,7,7,8,8,10], 6));
// console.log(searchRange([1], 1));
console.log(searchRange([2,2], 1));
// console.log(searchRange([], 6));