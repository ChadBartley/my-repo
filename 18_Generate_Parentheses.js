/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let result = [];

    let recursive = function(l, r, s) {
        if( l > r) return;

        if(l=== 0 && r === 0) {
            result.push(s);
            return;
        }

        if (l > 0) recursive(l-1, r, s + '(');
        if (r > 0) recursive(l, r-1, s + ')');
    }

    recursive(n,n,'');

    return result;
    
};

console.log(generateParenthesis(3));