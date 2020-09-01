/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {

    const MOD = 1e9 + 7;
    let prevDP = new Array(target + 1).fill(0); // [1]
    
    for (let face = 1; face <= Math.min(f, target); face++) {
		prevDP[face] = 1; // [2]
	}
    
    for (let dice = 2; dice <= d; dice++) {  // [3]
        const newDP = new Array(target + 1).fill(0);
		
        for (let face = 1; face <= f; face++) { // [4]
		
            for (let num = 1; num <= target; num++) { // [5]
                const rem = num - face; // [6]
				
                if (rem > 0) { // [7]
                    newDP[num] = (newDP[num] + prevDP[rem]) % MOD;
                }
            }
        }
        prevDP = newDP;
    }
    
    return prevDP[target];
    
};

var recursiveNumRollsToTarget = function(d, f, target) {
    const MOD = 1e9 + 7;
    const memo = new Map();
	
    return findWays(d, 0);
    
    function findWays(k, sum) {
        const key = `${k}#${sum}`;
        
        // base case
        if (k == 0) return sum == target ? 1: 0;
        if (sum > target) return 0;
        if (memo.has(key)) return memo.get(key);
        
        let count = 0;
        
        for (let face = 1; face <= Math.min(f, target); face++) {
            count = (count + findWays(k - 1, sum + face)) % MOD;
        }
        
        memo.set(key, count);
        return count;
    }
};

console.log(recursiveNumRollsToTarget(1, 6, 3)); // 1
// console.log(numRollsToTarget(30, 30, 500)); // 1
// console.log(recursiveNumRollsToTarget(30,30, 500))