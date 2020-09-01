/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push({
        value: x,
        min: this.stack.length === 0 ? x : Math.min(x, this.getMin())
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.splice(this.stack.length -1, 1).value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};

let obj = new MinStack();
obj.push(5);
let test = obj.pop();
obj.push(4);
obj.push(3);
obj.push(6);
let thing = obj.top();
console.log(obj.getMin());
console.log(JSON.stringify(obj));