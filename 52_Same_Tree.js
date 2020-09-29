/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    let dps = (tree) => {
        
        if (!tree) {
            return [];
        }
        
        let res = [tree.val];
        
        if(tree.left) {
            res.push(...dps(tree.left))
        } else if (tree.right) {
            res.push(null);
        }
        
        if(tree.right) {
            res.push(...dps(tree.right));
        }
        
        return res;
    }
    
    let pArray = dps(p);
    let qArray = dps(q);
    
    console.log(`pArray: ${JSON.stringify(pArray)}`);
    console.log(`qArray: ${qArray}`);
    
    if(pArray.length !== qArray.length) {
        return false;
    }
    
    for(let i = 0; i < pArray.length; i++) {
        if(pArray[i] != qArray[i]) {
            return false;
        }
    }
    
    return true;
    
};