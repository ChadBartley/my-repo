/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    var count = 0;

    var lookup = {
        1: 1,
        2: 2,
    }
    
    let recursive = (a) => {
        let local = 0;
        if(lookup.get(a)) {
            count += lookup.get(1);
            return;
        } else {
            let val1 = recursive(a - 1);
            lookup[a-1] = val1;
            let val2 = recursive(a - 2);
            lookup[a-2] = val2;
            return val1 + val2;
        }
    }
    
    count += recursive(n);
    
    return count;
    
};

console.log(climbStairs(3)); // 3
console.log(climbStairs(44));