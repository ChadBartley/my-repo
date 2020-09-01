/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let values = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    let stack = [];

    for(let char of s) {
        switch(char) {
            case '(':
            case '{':
            case '[':
                stack.push(char);
                break;
            default:
                let last = stack[stack.length -1];
                
                if(!last) {
                    return false;
                } else if( values[char] === last ) {
                    // Item on top of stack matches closing tag, pop
                    stack.pop();
                } else {
                    return false;
                }
        }
    }
    
    return true;
    
};


console.log(isValid(`[]`));
console.log(isValid(`(])`));