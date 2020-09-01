/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 // This uses the trick of a slow and fast runner
 //  Eventually the fast moving pointer will catch up
//      to the slow one and we will find the loop
var hasCycle = function(head) {
    
    let p1 = head;
    let p2 = head;
    
    while(p2 && p2.next && p2.next.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        
        if (p1 === p2) {
            return true
        }
    }
    
    return false;
    
};