var getSum = function(a, b) {
    if (b === 0) {
        return a;
    } else {
        return getSum(a ^ b, (a & b) << 1);
    }
}

console.log(getSum(9,99));