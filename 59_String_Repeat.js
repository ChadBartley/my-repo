/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

    var index = 0;
    
    let recursive = (string) => {
        
        if(!string || string[0] === ']') {
            return '';
        }
        
        let res = '';

        while(index < string.length) {
            if(string[index] === '[') {
                index += 1;
                continue;
            }
            
            if(string[index] === ']') {
                index += 1;
                return res;
            }
            
            if(!isNumeric(string[index])) {
                res = res + string[index];
                index += 1;
            } else {
                let repeat = '';
                
                while(isNumeric(string[index])) {
                    repeat = repeat + string[index];
                    index += 1;
                }
                
                repeat = parseInt(repeat);
                index += 1;
                res = res + recursive(string).repeat(repeat);
            }
        }
        
        return res;
        
    }
    
    return recursive(s);
    
};

let isNumeric = (c) => {
    return !isNaN(parseInt(c, 10));
}

console.log(decodeString('3[a]2[bc]') === 'aaabcbc'); // aaabcbc
console.log(decodeString('3[a2[c]]') === 'accaccacc'); // accaccacc
console.log(decodeString('2[abc]3[cd]ef') === 'abcabccdcdcdef'); // abcabccdcdcdef
console.log(decodeString('abc3[cd]xyz') === 'abccdcdcdxyz'); // abccdcdcdxyz
console.log(decodeString("100[leetcode]" === "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode")); // "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode"
