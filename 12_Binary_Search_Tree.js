function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    if(!nums.length) return null;

    let mid = Math.floor(nums.length / 2);

    const treeNode = new TreeNode(nums[mid]);

    treeNode.left = sortedArrayToBST(nums.slice(0, mid));
    treeNode.right = sortedArrayToBST(nums.slice(mid + 1))
    
    return treeNode;
};


let node = sortedArrayToBST([-10,-3,0,5,9]);

console.log(JSON.stringify(node));