/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {

    const stack = [];
    const result = [];
    if (!root) {
        return result;
    }
    stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        result.push(node.val);
        for(let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return result;
};


var preorderRecursive = function(root) {
    const result = [];
    function traverse(tree) {
        if (!tree) {
            return result;
        }
        result.push(tree.val);
        for(let i = 0; i < tree.children.length; i++) {
            traverse(tree.children[i]);
        }
        return result;
    }
    return traverse(root)
}

let testData = {"val":1,"children":[{"val":3,"children":[{"val":5,"children":[]},{"val":6,"children":[]}]},{"val":2,"children":[]},{"val":4,"children":[]}]};

console.log(`Stack: ${preorder(testData)}`); //[1,3,5,6,2,4]

console.log(`Recursive: ${preorderRecursive(testData)}`);
