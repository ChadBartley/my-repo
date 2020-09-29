/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
    let available = {
        5: 1,
        10: 0,
        20: 0
    }
    
    let canMakeChange = (value) => {
        
        if (value === 0) {
            return true;
        }
        
        if (value >= 20 && available[20]) {
            available[20] -= 1;
            return canMakeChange(value - 20);
        }
        
        if (value >= 10 && available[10]) {
            available[10] -= 1;
            return canMakeChange(value - 10);
        }
        
        if (value >= 5 && available[5]) {
            available[5] -= 1;
            return canMakeChange(value - 5);
        }
        
        return false;
        
    }
    
    for(let bill of bills) {
        if(bill === 5) {
            available[5] += 1;
        } else {
            available[bill] += 1;
            if(!canMakeChange(bill - 5)) {
                return false;
            }
        }
    }
    
    return true;
    
};


console.log(lemonadeChange([5,5,10,10,20])); // false