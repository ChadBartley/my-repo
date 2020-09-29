/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(height) {
    
    if(height.length === 1) {
        return height[0];
    }
    
    // if(height.length === 2) {
    //     let lowest = height[0] > height[1] ? height[1] : height[0];

    //     return 2 * lowest;
    // }
    
    let i = 0;
    let j = height.length - 1;

    let max = 0;

    while (i <= j) {

        let lowest = height[i] > height[j] ? height[j] : height[i];

        let width = Math.abs(i - j);
        
        if(width <= 1) {
            width += 1;
        }
        
        let local = width * lowest;

        if(local > max) {
            max = local;
        }

        if(height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return max;
};

console.log(largestRectangleArea([0,9])); // 9
console.log(largestRectangleArea([1,1])); // 2