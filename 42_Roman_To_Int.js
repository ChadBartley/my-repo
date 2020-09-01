/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let sum = 0;
    for (let i = s.length -1; i >= 0; i--) {
        let current = s[i];
        let next = s[i-1];
        
        if ( values[current] > values[next]) {
            sum = sum + values[current] - values[next];
            i--;
        } else {
            sum += values[current];
        }
    }
    
    return sum;
    
};

console.log(romanToInt('LVIII')); // 58