/**
 * @param {number} x
 */
const BST  = function(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * @param {number} x
 * @return {void}
 */
BST.prototype.add = function(x, t) {
    if (x < this.val) {
        this.left ? this.left.add(x) : this.left = new BST(x);
        return this.val - x <= t 
    } else {
        this.right ? this.right.add(x) : this.right = new BST(x);
    }
}

/**
 * @param {BST} node
 * @return {BST}
 */
const predecessor = function(node) {
    node = node.left;
    while (node.right) {
        node = node.right;
    }
    return node;
}

/**
 * @param {BST} node
 * @return {BST}
 */
const successor = function(node) {
    node = node.right;
    while (node.left) {
        node = node.left;
    }
    return node;
}

/**
 * @param {number} x
 * @return {void}
 */
BST.prototype.delete = function(x) {
    if (this.val === x) {
        if (this.right) {
            const next = successor(this);
            this.val = next.val;
            this.right = this.right.delete(next.val);
        } else if (this.left) {
            const prev = predecessor(this);
            this.val = prev.val;
            this.left = this.left.delete(prev.val);
        } else {
            return null;
        }
    } else {
        this.val < x
            ? this.right = this.right.delete(x)
            : this.left = this.left.delete(x);
    }
    return this;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
BST.prototype.between = function(a,b) {
    if (a <= this.val && this.val <= b) {
        return true;
    }
    if (this.left && a < this.val && b < this.val) {
        return this.left.between(a,b);
    }
    if (this.right && a > this.val && b > this.val) {
        return this.right.between(a,b);
    }
    return false;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let root = null;
    for (let i = 0; i < nums.length; i++) {
        if (root && root.between(nums[i] - t, nums[i] + t)) {
            return true;
        }
        root ? root.add(nums[i]) : root = new BST(nums[i]);
        if (k <= i) {
            root = root.delete(nums[i-k]);
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1],3,0)); // true
console.log(containsNearbyAlmostDuplicate([-1,-1], 1, -1)); // false