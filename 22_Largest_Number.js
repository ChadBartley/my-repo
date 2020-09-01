/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    return nums.sort(function(a, b) {
        return (b + '' + a ) - (a + '' + b);
    }).join('').replace(/^0*/,'') || '0';
    
};

console.log(largestNumber([10,2,21])); // 22110