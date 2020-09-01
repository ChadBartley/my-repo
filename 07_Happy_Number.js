// var isHappy = function(n) {
//     var seen = {};
//     while (n !== 1 && !seen[n]) {
//         seen[n] = true;
//         n = sumOfSquares(n);
//     }
//     return n === 1 ? true : false;
// };

// function sumOfSquares(numString) {
//     return numString.toString().split('').reduce(function(sum, num) {
//         return sum + Math.pow(num, 2);
//     }, 0);
// }


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let seen = {};
    
    while( n!== 1 && !seen[n]) {
        seen[n] = true;
        
        n = sumOfSquares(n);
    }
    
    return n === 1;
    
};

function sumOfSquares(num) {
    let sum = 0;
    
    while(num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, 2);
        num = parseInt(num / 10);
    }
    
    return sum;
}

console.log(isHappy(19));