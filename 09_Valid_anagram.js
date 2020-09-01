// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
    
//     if(s.length !== t.length) {
//         return false;
//     }
    
//     for(let char of s) {
//          t = t.replace(char, '');
//     }
    
//     return t.length === 0;
    
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) {
        return false;
    }
    
    let tracker = {};
    
    for(let char of s) {
        if(!tracker[char]) {
            tracker[char] = 1;
        } else {
            tracker[char] += 1;
        }
    }
    
    for(let char of t) {
        if(!tracker[char] || tracker[char] === 0) {
            return false;
        } else {
            tracker[char] -= 1;
        }
    }
    
    
    for(let key in tracker) {
        if(tracker[key] > 0) {
            return false;
        }
    }
    
    return true;
    
};

console.log(isAnagram('anagram', 'nagaram'));