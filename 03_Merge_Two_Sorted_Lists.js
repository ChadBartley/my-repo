// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
    
//     let returnList = [];
        
//     while(l1) {
//         let left = l1[0];
//         let right = l2[0];

//         if (left && !right) {
//             returnList.push(...l1);
//             break;
//         } else if (left === right) {
//             returnList.push(left, right);
//             l1.splice(0,1);
//             l2.splice(0,1);
//         } else if ( left < right) {
//             returnList.push(l1[0]);
//             l1.splice(0,1);
//         } else {
//             returnList.push(l2[0]);
//             l2.splice(0,1);
//         }
//     }
    
//     returnList.push(...l2);
    
//     return returnList;
    
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    var mergedHead = { val : -1, next : null },
    crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;

    return mergedHead.next;
    
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));