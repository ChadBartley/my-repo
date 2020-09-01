/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    let lookup = {
        
    }
    
    for(let char of chars) {
        if(lookup[char]) {
            lookup[char] += 1;
        } else {
            lookup[char] = 1;
        }
    }
    
    let sum = 0;
    
    for(let word of words) {
        if(word.length <= chars.length) {
            
            let available = Object.assign({}, lookup);
            
            let valid = true;
            
            for(let char of word) {
                if(available[char] && available[char] >= 1) {
                    available[char] -= 1;
                } else {
                    valid = false;
                    break;
                }
            }
            
            if(valid) {
                sum += word.length;
            }
        }
    }
    
    return sum;
    
};

console.log(countCharacters(["cat","bt","hat","tree"], 'atach')); // 6
console.log(countCharacters(["hello","world","leetcode"], 'welldonehoneyr')); // 10