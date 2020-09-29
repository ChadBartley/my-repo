/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    
    while(bits.length > 1) {
        if(bits[0] === 1) {
            bits = bits.slice(2);
        } else {
            bits = bits.slice(1);
        }
    }
    
    return bits.length === 1;
    
};

console.log(isOneBitCharacter([1,1,1,0]));