/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    
    const arr = [];
    
    let node = head;
    
    while(node) {
        arr.push(node.val);
        node = node.next;
    }
    
    
    let convertListToBST = (left, right) => {
        
        if(left > right) {
            return null;
        }
        
        let mid = Math.floor((left + right) / 2);
        
        let node = new TreeNode(arr[mid]);
        
        if(left === right) {
            return node;
        }
        
        node.left = convertListToBST(left, mid - 1);
        node.right = convertListToBST(mid + 1, right);
        
        return node;
        
    }
    
    return convertListToBST(0, arr.length - 1);   
    
};