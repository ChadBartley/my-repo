/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s) {
    
//     let stack = [];
    
//     let count = 0;
//     let max = 0;
    
//     for(let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if(char === '(') {
//             stack.push(char);
//         } else if (char === ')') {
//             if(stack.length >= 1) {
//                 let top = stack.pop();
//                 if (top === '(') {
//                     // valid , increase count
                    
//                     if(i === s.length - 1) {
//                         // last element
//                         if(stack.length > 0) {
//                             count += 2;
//                             if(count > max) {
//                                 max = count;
//                             }
//                         } else {
//                             count += 2;
//                             if(count > max) {
//                                 max = count;
//                             }
//                         }
//                     } else {
//                         count += 2;
//                         if(count > max) {
//                             max = count;
//                         }
//                     }

//                     if(stack.length === 0 && (!s[i + 1] || s[i + 1] !== '(')) {
//                         count = 0;
//                     }
                    
//                 } else {
//                     // invalid
//                     count = 0;
//                     stack = [];
//                 }
//             }
//         }
        
//     }
    
//     return max;
    
// };

var longestValidParentheses = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (stack.length && s[stack[stack.length - 1]] === '(' && s[i] === ')') {
            stack.pop();
        } else {
            stack.push(i);
        }
    }
    if (stack.length === 0) return s.length;
    var end = s.length - 1;
    var max = 0;
    while (stack.length) {
        var start = stack.pop() + 1;
        max = Math.max(max, end - start + 1);
        end = start - 2;
    }
    return Math.max(max, end - 0 + 1);;
};

// console.log(longestValidParentheses('(()')); // 2
// console.log(longestValidParentheses('()(()')); // 2
console.log(longestValidParentheses(')()())')); // 4