/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    str.trim();

    console.log(str.slice(0,2));

    if(!/\-\d+$|^\+\d+$/.test(str.slice(0,2))) {
        return 0;
    }
    
    return parseInt(str.replace(/\-\D|\+\D/g,''));
    
};


console.log(myAtoi("   -42"));