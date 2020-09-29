/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    
    let stack = [];
    
    for(let letter of s) {
        let top = stack[stack.length - 1];
        
        if(top) {
            
            if(letter === top && stack.length >= k -1 ) {
                
                let i = 0;
                
                let shouldRemove = true;
                
                while(i < k - 1) {
                    if(stack[stack.length - i - 1] != letter) {
                        shouldRemove = false;
                    }
                    i += 1;
                }
                
                if(shouldRemove) {
                    stack = stack.slice(0, stack.length - k + 1 );
                } else {
                    stack.push(letter);
                }
                
            } else {
                stack.push(letter);
            }
            
        } else {
            stack.push(letter);
        }
    }
    
    return stack.join('');
    
};

var removeDuplicates_linear = function(s,k) {
    let stack = [];
    
    for(let char of s) {
        if(stack.length > 0 && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
            
            if(stack[stack.length -1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    
    let res = '';
    
    for(let [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
}

console.log(removeDuplicates('abcd', 2)); // 'abcd'
console.log(removeDuplicates('deeedbbcccbdaa', 3)); // 'aa'
console.log(removeDuplicates('pbbcggttciiippooaais', 2)); // 'ps'