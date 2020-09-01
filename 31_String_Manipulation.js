/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    
    let count = {};
    
    for(let char of T) {
        if(!count[char]) {
            count[char] = 1;
        } else {
            count[char] += 1;
        }
    }
    
    let res = '';
    
    for(let char of S) {
        if(count[char]) {
            for(let i = 0; i < count[char]; i++) {
                res = res + char;
            }
            
            count[char] = 0;
        } 
    }
    
    for(let char of Object.keys(count) ) {
        if(count[char] > 0) {
            for(let i = 0; i < count[char]; i++) {
                res = res + char;
            }
        }
    }
    
    return res;
    
};

// console.log(customSortString('cba', 'abcd'));
// console.log(customSortString('cbafg', 'abcd'));
console.log(customSortString('kqep', 'pekeq'));